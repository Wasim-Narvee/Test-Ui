import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private apiUrl =""; 
  constructor(private http:HttpClient) { }


// Post Method To save Data in Backend Data Base
  postUsersdata(data:any): Observable<any>{                                           

    return this.http.post(this.apiUrl,data);      
  }

  // To get data From

getEmployee():Observable<any>
{

  return this.http.get(this.apiUrl)
}

}
