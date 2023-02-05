import { Component } from '@angular/core';
import { gameelement } from '../game-element';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {

  elements: gameelement[] = [
    {id: 1, name: 'rock'},
    {id: 2, name: 'paper'},
    {id: 3, name: 'scissors'}
  ];

  constructor(private restService: RestService){}

  onSelect(id: number): void{
      console.log(id);
  }
}
