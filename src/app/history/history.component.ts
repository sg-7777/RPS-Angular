import { Component, OnInit } from '@angular/core';
import { GameDTO } from '../DTOs/game-dto';
import { SharedDataService } from '../shared-data.service';
import { MatchDTO } from '../DTOs/match-dto';
import { PlayerDTO } from '../DTOs/player-dto';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  game: GameDTO;

  constructor(private sharedDataService: SharedDataService){}

  ngOnInit(): void {
    this.game = new GameDTO();
    this.game.gameid = 1;
    let p1 = new PlayerDTO("Test", "ROCK");
    p1.result = "DRAW";
    for(let i = 0; i < 3; i++){
      let m = new MatchDTO();
      m.playerOne = p1;
      m.playerTwo = p1;
      this.game.matches.push(m);
    }
    this.game.playerOneScore = 1;
    this.game.playerTwoScore = 1;

    console.log(this.game)
  }

}
