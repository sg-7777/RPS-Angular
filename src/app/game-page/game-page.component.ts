import { Component, OnInit } from '@angular/core';
import { PlayerDTO } from '../DTOs/player-dto';
import { RestService } from '../rest.service';
import { MatchDTO } from '../DTOs/match-dto';
import { SharedDataService } from '../shared-data.service';
import { Elements } from '../elements';
import { GameDTO } from '../DTOs/game-dto';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
/**
 * Component for letting the user pick a hand and do a rest call to backend
 */
export class GamePageComponent implements OnInit{
  elements: any;

  playername: string = '';
  // obj gets lost when in ngOnInit init
  match: MatchDTO = new MatchDTO();

  constructor(private restService: RestService,
              private shareddata: SharedDataService,
              private authGuard: AuthGuardService){}

  ngOnInit(): void {
    console.log(this.shareddata.name.length)
    this.authGuard.isLoggedIn = this.shareddata.name.length == 0;

    this.playername = this.shareddata.name;
    this.elements = Elements.ELEMENTS;

    let player = new PlayerDTO(this.playername, "Your Hand");
    let opponent = new PlayerDTO("To Be Determined", "Opponent Hand");
    this.match.playerOne = player;
    this.match.playerTwo = opponent;

  }

  onSelect(hand: string): void{
    this.match.playerOne.choice = hand;
    
    this.restService.postHand(this.match.playerOne).subscribe((data: MatchDTO) => {
      // Must create new obj otherwise just an object like MatchDTO gets transfered but not from type MatchDTO
      this.match = new MatchDTO();
      this.match.playerOne = new PlayerDTO(data.playerOne.name, data.playerOne.choice);
      this.match.playerOne.result = data.playerOne.result;
      this.match.playerTwo = new PlayerDTO(data.playerTwo.name, data.playerTwo.choice);
      this.match.playerTwo.result = data.playerTwo.result;
    });
  }


}
