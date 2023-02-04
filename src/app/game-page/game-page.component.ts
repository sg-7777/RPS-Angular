import { Component } from '@angular/core';
import { Element } from '../element';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent {

  elements: Element[] = [
    {id: 1, name: 'Rock'},
    {id: 2, name: 'Paper'},
    {id: 3, name: 'Scissor'}
  ];

  onSelect(id: number): void{
    console.log(id);
  }
}
