import { Component, Input, SimpleChanges, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { GameDTO } from '../../DTOs/game-dto';
import { MatchDTO } from 'src/app/DTOs/match-dto';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
/**
 * This class handles the scoreboard. It creates GameDTO instances. It is the central managment system for the game data
 */
export class ScoreboardComponent{

  @Input() match: MatchDTO
  //Can't create obj in ngOnInit??
  game: GameDTO = new GameDTO();;

  matchid: number = 0;
  playerscore: number = 0;
  opponentscore: number = 0;

  constructor(private restService: RestService){}


  ngOnChanges(changes: SimpleChanges){
    this.calcScore();

    this.match.matchid = this.matchid.toString();
    this.game.matches.push(this.match);
    this.matchid++;
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
    if(this.game.matches[0].matchid == "0"){
      this.game.matches = this.game.matches.slice(1, this.game.matches.length);
    }

    this.game.gameid = this.getRandomInt(9999).toString();

    this.game.playerOneScore = this.playerscore;
    this.game.playerTwoScore = this.opponentscore;

    this.restService.saveGame(this.game).subscribe(data => console.log(data));
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
}
