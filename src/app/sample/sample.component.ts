import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHandlerService } from '../httpHandler.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit, OnDestroy {
    private userInfo: User;
    private isShow: boolean;
    private showSpinner: boolean;
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    constructor(private httpService: HttpHandlerService,
        private router: Router) { }    

    ngOnInit() {
        this.isShow = false;
        this.showSpinner = false;
        this.showResult();
    }
    private showResult():void{
        this.showSpinner = true;
        this.httpService.getResponse().pipe(takeUntil(this.ngUnsubscribe)).subscribe((data: User) => {
            this.userInfo = data;
            this.showSpinner = false;
        }, (error) => {
            console.log(error)
        }
        )
    }

    private navigate(selectedId: String):void {
        this.isShow = true;
        this.router.navigate(['/userinfo'], { queryParams: { value: selectedId } })
    }
     ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
