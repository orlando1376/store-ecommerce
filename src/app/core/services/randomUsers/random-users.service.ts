import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { HandleError } from '@utils/handleError';

interface User {
  email: string;
  gender: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  constructor(
    private http: HttpClient
  ) { }

  // tipado de peticiones
  getRandomUsers(): Observable<User[]> {
    return this.http.get('https://randomuser.me/api/?results=2')
    .pipe(
      retry(3), // reintenta tres veces antes de enviar el error
      catchError(HandleError),
      map((response: any) => response.results as User[])
    );
  }

  getFileTxt() {
    return this.http.get('assets/files/test.txt', {responseType: 'text'});
  }

  getFilePdf() {
    return this.http.get('assets/files/EjerciciosSQL.pdf', {responseType: 'blob'});
  }

  getFileZip(): Observable<ArrayBuffer> {
    return this.http.get('assets/files/EjerciciosSQL.pdf', {responseType: 'arraybuffer'});
  }

}
