import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameDTO } from './DTOs/game-dto';

@Injectable({
  providedIn: 'root'
})

// Service for sharing data between the components
export class SharedDataService {

  game: GameDTO;

  name: string;

  constructor() { } 

}
