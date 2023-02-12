import { Component, OnInit } from '@angular/core';
import { GameDTO } from '../DTOs/game-dto';
import { SharedDataService } from '../shared-data.service';
import { MatchDTO } from '../DTOs/match-dto';
import { PlayerDTO } from '../DTOs/player-dto';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  game: GameDTO;

  constructor(private restService: RestService,
              private route: ActivatedRoute){}

  ngOnInit(): void {
    const gameid = Number(this.route.snapshot.paramMap.get('gameid'));

    this.restService.loadGame(gameid).subscribe((data: GameDTO) => {
      console.log(data)

      this.game = data;
    });

    
  }

}
