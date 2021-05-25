import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { TokenService } from './token.service';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth,
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  createUser(email: string, password: string) {
    return this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.angularFireAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.angularFireAuth.signOut();
  }

  hasUser() {
    return this.angularFireAuth.authState;
  }

  loginRestApi(email: string, password: string) {
    return this.http.post('https://platzi-store.herokuapp.com/auth', {email, password})
      .pipe(
        // el tap se ejecuta antes de devolver los datos
        tap((data: {token: string}) => {
          const token = data.token;
          this.tokenService.saveToken(token);
        })
      );
  }
}
