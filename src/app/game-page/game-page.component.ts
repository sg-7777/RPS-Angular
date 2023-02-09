import { Component, OnInit } from '@angular/core';
import { PlayerDTO } from '../player-dto';
import { RestService } from '../rest.service';
import { MatchDTO } from '../match-dto';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit{

  playername: string = '';

  player: PlayerDTO = new PlayerDTO();
  opponent: PlayerDTO = new PlayerDTO();
  match: MatchDTO = new MatchDTO();

  playerscore: number = 0;
  opponentscore: number = 0;
  
  elements = [
    {hand: 'ROCK'},
    {hand: 'PAPER'},
    {hand: 'SCISSORS'}
  ];

  constructor(private restService: RestService, private shareddata: SharedDataService){}

  ngOnInit(): void {
    this.shareddata.nameObs.subscribe((data) => {
      this.playername = data;
    })
   
    this.player.name = this.playername
  }

  onSelect(hand: string): void{
    this.player.choice = hand;
    
    this.restService.postHand(this.player).subscribe((data: MatchDTO) => {
      console.log(data);
      this.player = data.playerOne;
      this.opponent = data.playerTwo;
    });
  }
  
}
