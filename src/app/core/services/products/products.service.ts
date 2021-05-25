import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';

import { environment } from './../../../../environments/environment';

import { HandleError } from '@utils/handleError';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>(`${environment.urlApi}/products`)
    .pipe(catchError(HandleError));
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.urlApi}/products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.urlApi}/products`, product)
    .pipe(catchError(HandleError));
  }

  updateProduct(id: string, change: Partial<Product>) {
    return this.http.put<Product>(`${environment.urlApi}/products/${id}`, change)
    .pipe(catchError(HandleError));
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.urlApi}/products/${id}`)
      .pipe(catchError(HandleError));
  }

}
