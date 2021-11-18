import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private authorization: string | undefined;
  private accept = 'application/json';
  private responseType = 'json';
  private key = 'b08db21135mshdba8b17c032539cp1fa303jsn18c9432fa3d2';

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.authorization = `Bearer ${ this.key }`;

    if (request.method === 'POST' && request.body instanceof FormData) {
      this.accept = 'multipart/form-data';
    }

    const headers = {
      Authorization: this.authorization,
      Accept: this.accept,
      responseType: this.responseType,
      'x-rapidapi-host': 'imdb8.p.rapidapi.com',
      'x-rapidapi-key': 'b08db21135mshdba8b17c032539cp1fa303jsn18c9432fa3d2'
    };

    return next
      .handle(
        request.clone({
          setHeaders: {...headers},
        })
      );
  }
}
