import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Service for sharing data between the components
export class SharedDataService {
  nameObs: Observable<string>;

  createNameObservable(name: string): Observable<string>{
    this.nameObs = new Observable<string>((subscriber) => {
      subscriber.next(name);
    });
    return this.nameObs;
  }
  constructor() { }
}
