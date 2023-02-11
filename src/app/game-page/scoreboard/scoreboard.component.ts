import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { GameDTO } from '../../DTOs/game-dto';
import { MatchDTO } from 'src/app/DTOs/match-dto';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent{

  @Input() match: MatchDTO
  //Can't create obj in ngOnInit??
  game: GameDTO = new GameDTO();;

  playerscore: number = 0;
  opponentscore: number = 0;

  constructor(private restService: RestService){}


  ngOnChanges(changes: SimpleChanges){
    this.calcScore();  
    this.game.matches.push(this.match);
  }

  calcScore(){
    if(this.match.playerOne.result == "WIN"){
      this.playerscore++;
    }
    if(this.match.playerTwo.result == "WIN"){
      this.opponentscore++;
    }
  }

  saveGame(){
    if(this.game.matches[0].playerTwo.choice == "Opponent Hand"){
      this.game.matches = this.game.matches.slice(1, this.game.matches.length - 1);
    }

    this.game.playerOneScore = this.playerscore;
    this.game.playerTwoScore = this.opponentscore;

    this.restService.saveGame(this.game).subscribe(data => console.log(data));
  }
}
