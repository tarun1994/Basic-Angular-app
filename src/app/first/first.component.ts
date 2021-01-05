import { Component, OnInit } from '@angular/core';
import { BridgeServiceService } from '../bridge-service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private bridge: BridgeServiceService) { }

  ngOnInit() {
  }
  click() {
    this.bridge.nextCount();
  }
}
