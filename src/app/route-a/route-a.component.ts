import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-a',
  templateUrl: './route-a.component.html',
  styleUrls: ['./route-a.component.css']
})
export class RouteAComponent implements OnInit {
  public val:any='';
  constructor( private router: Router,) { }

  ngOnInit() {
  }
  navigate(){
    this.router.navigate(['/routeB'],{queryParams: { value: this.val }})
  }
}
