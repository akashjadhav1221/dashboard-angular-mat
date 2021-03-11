import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  public tab = new BehaviorSubject('component1');
  constructor() { }

  setComponent(val: string){
    this.tab.next(val);
  }
}
