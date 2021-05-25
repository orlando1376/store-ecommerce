import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  // variable de tipo Observable
  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
    // creamos una nueva instancia del arreglo
    this.products = [...this.products, product];

    // notificar que hubo un cambio
    this.cart.next(this.products);
  }

  deleteCart(product: Product) {
    const index = this.products.findIndex((prod) => prod.id === product.id);
    if ( index > -1 )
    {
      this.products.splice(index, 1);
    }

    // para obligar a notificar el cambio
    this.products = [...this.products];

    // notificar que hubo un cambio
    this.cart.next(this.products);
  }
}
