import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';

import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { MyValidators } from '@utils/validators';

import { ProductsService } from '@core/services/products/products.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveProduct(event: Event) {
    event.preventDefault();

    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product)
        .subscribe(newProduc => {
          this.router.navigate(['./admin/products']);
        });
    }
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const fileRef = this.angularFireStorage.ref(file.name);
    const task = this.angularFireStorage.upload(file.name, file);

    task.snapshotChanges()
      .pipe(
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe(url => {
            this.form.get('image').setValue(url);
          });
        })
      )
      .subscribe();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', Validators.required],
    });
  }

  get priceField() {
    return this.form.get('price');
  }
}
