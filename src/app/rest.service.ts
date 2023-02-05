import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { gameelement } from './game-element';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private backendUrl =  "http://localhost:8080/api/hello"

  constructor(private http: HttpClient) { }

  getHello(): Observable<gameelement>{
    return this.http.get<gameelement>(`${this.backendUrl}`);
  }
}
