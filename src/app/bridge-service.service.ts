import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BridgeServiceService {
  counter:any;
  count: BehaviorSubject<number>;
  constructor() {
    this.count  = new BehaviorSubject(this.counter);
   }

  nextCount() {
    this.count.next(++ this.counter);
  }
}
