import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from '../model/dog.model';
import { ApplicationResponse } from '../model/appresponse.model';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  public constructor(private http: HttpClient) {
    //this.http=http;
  }

  public authUser(username:String,password:Observable<String>){
     let formData: any = new FormData();
     formData.append("username", username+'');
     formData.append("password", password+'');
     return  this.http.post('http://localhost:8080/users/login', formData)
  }

  //Observable makes your call asynchronous
  public findDogs() : Observable<Dog[]>{
    //When we have set
    console.log("Token is  = "+localStorage.getItem('userToken'));
    var reqHeader = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('userToken')
   });
    return this.http.get<Dog[]>("http://localhost:8080/dogs",{ headers: reqHeader });
  }

  public addDog(dog:Dog) :Observable<ApplicationResponse>{
     return this.http.post<ApplicationResponse>('http://localhost:8080/dogs',dog);
  }

  public updateDog(dog:Dog) :Observable<ApplicationResponse>{
    return this.http.put<ApplicationResponse>('http://localhost:8080/dogs',dog);
 }

 public deleteDog(dog:Dog ):Observable<ApplicationResponse>{
     return this.http.delete<ApplicationResponse>('http://localhost:8080/dogs/'+dog.did);
 } 
 
}
