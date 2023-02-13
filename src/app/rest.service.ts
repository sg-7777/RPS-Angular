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

  /**
   * Sents the picked hand to server and receives a match model with opponent and opponent hand
   * @param playerDTO the player with name and hand
   * @returns the match between this player and the cpu
   */
  postHand(playerDTO: PlayerDTO): Observable<any>{ // WHY DO I NOT GET A MODEL OF THIS CLASS BACK?
    return this.httpClient
      .post<MatchDTO>(Constants.API_URL + Constants.PLAY, 
                      playerDTO, 
                      {headers: Constants.HTTP_HEADER});
  }

  /**
   * saves the current match between the player and the cpu with all matches being played and score
   * @param gameDTO the game aka all matches plus score
   * @returns was match successfully saved
   */
  saveGame(gameDTO: GameDTO): Observable<boolean>{
    return this.httpClient
      .post<boolean>(Constants.API_URL + Constants.SAVE, 
                      gameDTO, 
                      {headers: Constants.HTTP_HEADER});
  }

  /**
   * loads the game with the specified id
   * @param gameid the id whith which the game is saved to DB
   * @returns returns the game if possible
   */
  loadGame(gameid: number): Observable<GameDTO>{  // Why does Observable be of type <any> so I can use it correctly?
    return this.httpClient
      .post<GameDTO>(Constants.API_URL + Constants.LOAD,
                      gameid,
                      {headers: Constants.HTTP_HEADER});
        
  }
}
