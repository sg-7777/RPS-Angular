import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, filter, catchError, mergeMap, retry} from 'rxjs/operators';
import { PlayerDTO } from './DTOs/player-dto';
import { MatchDTO } from './DTOs/match-dto';
import { Constants } from './config/constants';
import { GameDTO } from './DTOs/game-dto';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient: HttpClient) { }

  postHand(playerDTO: PlayerDTO): Observable<any>{
    return this.httpClient
      .post<MatchDTO>(Constants.API_URL + Constants.PLAY, 
                      playerDTO, 
                      {headers: Constants.HTTP_HEADER});
  }

  saveGame(gameDTO: GameDTO): Observable<boolean>{
    return this.httpClient
      .post<boolean>(Constants.API_URL + Constants.SAVE, 
                      gameDTO, 
                      {headers: Constants.HTTP_HEADER});
  }

  // Why does Observable be of type <any> so I can use it correctly?
  loadGame(gameid: number): Observable<GameDTO>{
    return this.httpClient
      .post<GameDTO>(Constants.API_URL + Constants.LOAD,
                      gameid,
                      {headers: Constants.HTTP_HEADER});
        
  }
}
