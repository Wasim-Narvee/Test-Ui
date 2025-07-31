import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private apiUrl ='http://localhost:3000/Post'; 
  constructor(private http:HttpClient) { }

  postUsersdata(data:any): Observable<any>{

    return this.http.post(this.apiUrl,data);
  }

}
