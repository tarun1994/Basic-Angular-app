import { Component, OnInit } from '@angular/core';
import { BridgeServiceService } from '../bridge-service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  count: number
  constructor(private bridge: BridgeServiceService) { }

  ngOnInit() {
 this.bridge.count.subscribe(c => {
   this.count=c;
 })
  }
onchange(event){
  this.bridge.counter= event.target.value;
}
}
