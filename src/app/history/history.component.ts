import { Component, OnInit } from '@angular/core';
import { GameDTO } from '../DTOs/game-dto';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../rest.service';
import { AuthGuardService } from '../auth-guard.service';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { MatchDTO } from '../DTOs/match-dto';
import { PlayerDTO } from '../DTOs/player-dto';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
/**
 * This class is for Database data representation
 */
export class HistoryComponent implements OnInit{

  game: GameDTO = new GameDTO();
  error: any;

  constructor(private restService: RestService,
              private route: ActivatedRoute,
              private authGuard: AuthGuardService,
              private router: Router){}

  ngOnInit(): void {
    // Hacky version for not exposing error in browser console
    let playerDummy = new PlayerDTO("", "");
    let matchDummy = new MatchDTO();
    matchDummy.playerOne = playerDummy;
    matchDummy.playerTwo = playerDummy;
    this.game.matches.push(matchDummy);

    const gameid = Number(this.route.snapshot.paramMap.get('gameid'));

      this.restService.loadGame(gameid).pipe(
        catchError(() => {
          this.router.navigate(['**']);
          return throwError(() => new Error('Game was not found with id: ' + gameid));
        })
      )
      .subscribe({
        next: (data) => {
          this.game = data;
        },
        error: (err) => {
          console.log(err);
        },
      });
  
    this.authGuard.isLoggedIn = this.game.gameid == "";
  }

}
