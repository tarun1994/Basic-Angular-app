import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlerService {  
 private configUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {
   }
   getResponse(): Observable<any>{
       return this.http.get(this.configUrl);
   }
   getUserInfoResponse(id:string): Observable<any>{
        return this.http.get(this.configUrl+"/"+id);
   }

}
