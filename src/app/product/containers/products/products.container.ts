import { Component, OnInit } from '@angular/core';
import { Product } from '@core/models/product.model';
import { ProductsService} from '@core/services/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class ProductsContainer implements OnInit {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  clickProduct(id: number) {
    console.log('Producto: ' + id);
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe(p => {
        this.products = p;
      });
  }
}
