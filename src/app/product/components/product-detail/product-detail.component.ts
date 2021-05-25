import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductsService } from '@core/services/products/products.service';
import { Product } from '@core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.product$ = this.route.params
    .pipe(
      // transformo para evitar un subsrive dentro de otro subscrive
      switchMap((params: Params) => {
        return this.productsService.getProduct(params.id);
      })
    );
  }

  createProduct() {
    const newProduct: Product = {
      id: '1377',
      title: 'Producto Orlo',
      image: 'assets/images/hoodie.png',
      price: 1376,
      description: 'Producto creado por Orlo'
    };

    this.productsService.createProduct(newProduct)
      .subscribe(p => { console.log(p); });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      title: 'Producto Orlo',
      price: 150000,
      description: 'Producto creado por Orlo'
    };

    this.productsService.updateProduct('1377', updateProduct)
      .subscribe(p => { console.log(p); });
  }

  deleteProduct() {
    this.productsService.deleteProduct('1377')
    .subscribe(p => { console.log(p); });
  }
}
