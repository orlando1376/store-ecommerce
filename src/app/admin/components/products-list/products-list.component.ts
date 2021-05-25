import { Component, OnInit } from '@angular/core';

import { Product } from '@core/models/product.model';
import { ProductsService } from '@core/services/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe(p => {
        this.products = p;
      });
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
      .subscribe(rta => {
        if (rta) {
          const index = this.products.findIndex((product) => product.id === id);
          if ( index > -1)
          {
            this.products.splice(index, 1);
          }
          this.products = [...this.products];
        }
      });
  }
}
