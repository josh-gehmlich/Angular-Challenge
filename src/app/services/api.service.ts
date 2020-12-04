import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  map,
  catchError
} from 'rxjs/operators';
import {
  environment
} from '../../environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  init() {
    return this.http
      .get(`${environment.baseUrl}/count/`)
      .pipe(
        map(response => {
          return {
            res: response
          };
        })
      );
  }

  reset() {
    return this.http
      .post(`${environment.baseUrl}/reset/`, {})
      .pipe(
        map(response => {
          return {
            res: response
          };
        }),
        catchError(err => {
          return throwError({
            error: err
          });
        })
      );
  }

  decrement() {
    return this.http
      .put(`${environment.baseUrl}/count/`, {})
      .pipe(
        map(response => {
          return {
            res: response
          };
        }),
        catchError(err => {
          return throwError({
            error: err
          });
        })
      );
  }
}
