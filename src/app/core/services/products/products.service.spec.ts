import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ProductsService } from './products.service';
import { environment } from './../../../../environments/environment';

describe('ProductsService', () => {
  let service: ProductsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('tests for getAllProducts', () => {
    it('should return products', () => {
      // arrange(preparar)
      // nicializa los objetos y establece el valor de los datos que se pasan al método bajo prueba
      const expectData = [
        {
          id: '1',
          title: 'prueba1',
          price: 123,
          description: 'descripcion',
          image: 'img/img.jpg',
        },
        {
          id: '2',
          title: 'prueba2',
          price: 123,
          description: 'descripcion',
          image: 'img/img.jpg',
        },
      ];
      let dataError;
      let dataResponse;

      // actuar
      // invoca el método bajo prueba con los parámetros organizados
      service.getAllProducts().subscribe(
        (response) => {
          dataResponse = response;
        },
        (error) => {
          dataError = error;
        }
      );
      const req = httpTestingController.expectOne(
        `${environment.urlApi}/products`
      );
      req.flush(expectData);

      // assert
      // verifica que la acción del método bajo prueba se comporta como se esperaba
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();
    });
  });
});
