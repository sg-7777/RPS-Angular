import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})

export class LandingPageComponent {
  playername: string = '';

  constructor(private shareddata: SharedDataService){}

  onClick(){
    this.shareddata.createNameObservable(this.playername);
  }
}
