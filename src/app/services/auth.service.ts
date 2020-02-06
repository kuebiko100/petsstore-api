import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../model/auth.model';
import { Observable } from 'rxjs';
import { ApplicationResponse } from '../model/appresponse.model';
import { TokenResponse } from '../model/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public constructor(private http: HttpClient) {
    //this.http=http;
  }

  public login(auth:Auth) :Observable<TokenResponse>{
    var formData: any = new FormData();
    formData.append("username", auth.username);
    formData.append("password", auth.password);
    return this.http.post<TokenResponse>('http://localhost:8080/users/signin',formData);
  } 
  
}
