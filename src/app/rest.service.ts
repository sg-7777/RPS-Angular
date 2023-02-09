import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PlayerDTO } from './player-dto';
import { MatchDTO } from './match-dto';
import { Constants } from './config/constants';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }

  postHand(player: PlayerDTO): Observable<MatchDTO>{
    return this.httpClient
      .post<MatchDTO>(Constants.API_URL + Constants.PATH, 
                      player, 
                      {headers: Constants.HTTP_HEADER});
  }

}
