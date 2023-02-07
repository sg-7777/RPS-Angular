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
  }

  onSelect(hand: string): void{
    let player: PlayerDTO = new PlayerDTO();
    player.name = "007";
    player.choice = hand;
    
    console.log("Vor dem abschicken" + player.name, player.choice);
      this.restService.postHand(player).subscribe((data: MatchDTO) => {
        console.log("P1 " + data.player1.name, " ", data.player1.choice);
        console.log("P2 " + data.player2.name, " ", data.player2.choice);
        console.log("Ergebnis " + data.winner);
        console.log(data)
      });
  }

 // onSelect(): void{
  //  this.restService.getHello().subscribe((data: number) => {
  //    console.log(data);
  //    
  //  });
//}
}
