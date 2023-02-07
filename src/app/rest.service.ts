import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PlayerDTO } from './player-dto';
import { MatchDTO } from './match-dto';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private api =  "http://localhost:8080/"
  private httpHeader = new HttpHeaders({ 'content-type': 'application/json'} );
  constructor(private httpClient: HttpClient) { }

  postHand(player: PlayerDTO): Observable<MatchDTO>{
    var path: string = "rest/play";

    return this.httpClient
      .post<MatchDTO>(this.api + path, player, {headers: this.httpHeader});
  }

}
