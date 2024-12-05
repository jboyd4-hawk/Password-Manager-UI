import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';
import { catchError, tap, throwError } from 'rxjs';

type TokenResponse = {
  jwt: string;
};

export type RegisterRequest = {
  username: string;
  password: string;
  role: 'USER';
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://password-manager-jboyd4-ezephse7fta3bmek.centralus-01.azurewebsites.net/api/auth';
  private http = inject(HttpClient);
  private storageService = inject(StorageService);
  private router = inject(Router);

  login(username: string, password: string) {
    return this.http
      .post<TokenResponse>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        tap((response) => {
          console.log(response);
          this.storageService.setToken(response.jwt);
          this.router.navigate(['/']);
        }),
        catchError((error) => {
          return throwError(
            () => new Error('Incorrect login, please try again.')
          );
        })
      );
  }

  register({ username, password, role }: RegisterRequest) {
    return this.http
      .post<String>(`${this.apiUrl}/register`, {
        username,
        password,
        role,
      })
      .pipe(
        tap((response) => {
          alert("Registration Successful!")
          console.log(response);
          this.router.navigate(['/login']);
        }),
        catchError((error) => {
          console.log(error);
          return throwError(
            () =>
              new Error(
                'Something went wrong with registering, please try again.'
              )
          );
        })
      );
  }

  logout() {
    this.storageService.clearToken();
    this.router.navigate(['/login']);
  }

  isLoggedIn() {
    return Boolean(this.storageService.getToken());
  }
}
