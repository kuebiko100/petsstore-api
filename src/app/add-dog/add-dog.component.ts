import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/dog.model';

import { HttpClient, HttpHeaders, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { ApplicationResponse } from '../model/appresponse.model';
import { Observable } from 'rxjs';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'app-add-dog',
  templateUrl: './add-dog.component.html',
  styleUrls: ['./add-dog.component.styl']
})
export class AddDogComponent implements OnInit {

  //Creating an instance of the Dog
  public dog=new Dog();
  public message:String ="";
  public showCancel=false; 
  public buttonLable="Upload Dog";

  constructor(private dogService:DogsService) {
 
  }

  ngOnInit() {
  
  }

  public deleteDog(dog:Dog ):void {
      this.dogService.deleteDog(dog).subscribe(data=>{
        this.message="Hello Dog is deleted successfully!!"; 
        //this.dogs=this.dogs.filter(t=>t.did!=dog.did);
      });       
  }

  
  public cancelDog():void{
    this.dog=new Dog();
    this.showCancel=false;
    this.buttonLable="Upload Dog";
  }


  public editDog(dog:Dog):void{
      //Making Cloning object of it
      this.dog=Object.assign({},dog);
      this.buttonLable="Update Dog";
      this.showCancel=true;

  }

  //this is called for add and edit both
  public addDog() : void {
        console.log("printing the dog data");
        console.log(this.dog); 
        if(this.dog.did==undefined){
          //Access my rest API
          //ContentType = application/json
         //Accept = application/json
         //any - return tyoe
           this.dogService.addDog(this.dog).subscribe(data => {
            console.log(data); // in data  we have code = did which is coming from server
            //for newly created record
           this.dog.did=data.code; 
           //this.dogs.push(this.dog);
            this.dog=new Dog();
            //Update the client side array of dog
            this.message="Hello Dog is uploaded successfully!!"; 
       });  
        }else{
               console.log("Coolo! ");
               this.dogService.updateDog(this.dog).subscribe(data => {
               this.message="Hello Dog is updated successfully!!";   
               this.cancelDog();
            }); 
        }
        
        
  }


}
