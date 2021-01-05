import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHandlerService } from '../httpHandler.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpService: HttpHandlerService,
             private router: Router) { }
    userInfo:any;
    val:any;
  ngOnInit() {
      this.userInfo =[{}];
      this.showResult();
  }
  showResult(){
      this.httpService.getResponse().subscribe((data) => {
          this.userInfo = data;
      })
  }
  navigate(selectedId:String){
    this.router.navigate(['/userinfo'],{queryParams: { value: selectedId }})
  }
}
