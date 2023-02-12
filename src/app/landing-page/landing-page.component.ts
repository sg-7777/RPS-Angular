import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { RestService } from '../rest.service';
import { GameDTO } from '../DTOs/game-dto';
import { PlayerDTO } from '../DTOs/player-dto';
import { MatchDTO } from '../DTOs/match-dto';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {
  playername: string = '';
  gameid: number;

  constructor(private shareddata: SharedDataService, private restService: RestService){}

  onClick(){
    this.shareddata.name = this.playername;
  }
}
