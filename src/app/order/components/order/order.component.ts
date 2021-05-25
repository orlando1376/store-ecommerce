import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '@core/models/product.model';
import { CartService } from '@core/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  products$: Observable<Product[]>;
  displayedColumns: string[] = ['image', 'title', 'price', 'count', 'actions'];

  constructor(
    private cartService: CartService
  ) {
    this.products$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

  addProduct(product: Product) {
    this.cartService.addCart(product);
  }

  deleteProduct(product: Product) {
    this.cartService.deleteCart(product);
  }
}
