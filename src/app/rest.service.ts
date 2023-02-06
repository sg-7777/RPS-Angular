import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { gameelement } from './game-element';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private api =  "http://localhost:8080/"

  constructor(private http: HttpClient) { }

  getHello(): Observable<number>{
    var path: string = "rest/hello";
    return this.http
      .get<number>(this.api + path);
  }

  postChoice(id: number): Observable<number>{
    var path: string = "rest/playerchoice";
    return this.http
      .post<number>(this.api + path, JSON.stringify(id));
  }
}
