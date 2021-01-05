import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpHandlerService } from '../httpHandler.service';
import { User } from '../models/user.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserInfoComponent implements OnInit, OnDestroy {
    
  private userId: string;
  private userData:User;
  private showSpinner:boolean;  
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private route: ActivatedRoute,
    private httpservice: HttpHandlerService) { }

  ngOnInit() {
    this.showSpinner=false;
    this.userId='';
    this.route.queryParams.pipe(takeUntil(this.ngUnsubscribe)).subscribe(params => {
        this.userId = params['value'];
    });
    this.getUserInfo();
  }

  getUserInfo():void{
      this.showSpinner = true;
    this.httpservice.getUserInfoResponse(this.userId).subscribe((data) => {
        this.userData = data;
        this.showSpinner = false;
    });
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}
 
}