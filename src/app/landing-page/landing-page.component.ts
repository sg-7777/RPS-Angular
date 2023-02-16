import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
/**
 * This class controls the flow of the user input to the other directives
 * It also has a guard for not authorized input
 */
export class LandingPageComponent {
  playername: string = '';
  gameid: number;

  constructor(private shareddata: SharedDataService, 
              private authGuard: AuthGuardService){}

  onClick(){
    this.shareddata.name = this.playername;
    this.authGuard.isLoggedIn = true;
  }

  goToHistory(){
    this.authGuard.isLoggedIn = this.gameid.toString() != "";
  }
}
