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
    {id: 1, name: 'Rock'},
    {id: 2, name: 'Paper'},
    {id: 3, name: 'Scissor'}
  ];

  constructor(private restService: RestService){}

  onSelect(): void{
    this.restService.getHello().subscribe((data: gameelement) => {
      console.log(data.id + " " + data.name);


    });
  }
}
