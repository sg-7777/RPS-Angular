import { Component, Input, SimpleChanges } from '@angular/core';
import { PlayerDTO } from '../../player-dto';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {

  @Input() player: PlayerDTO;
  @Input() opponent: PlayerDTO;

  playerscore: number = 0;
  opponentscore: number = 0;

  ngOnChanges(changes: SimpleChanges){
    this.calcScore();
  }

  calcScore(){
    if(this.player.result == "WIN"){
      this.playerscore++;
    }
    if(this.opponent.result == "WIN"){
      this.opponentscore++;
    }
  }
}
