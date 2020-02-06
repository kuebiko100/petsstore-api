import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';
import { Dog } from '../model/dog.model';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.styl']
})
export class DogsComponent implements OnInit {

  public dogs:Dog[]=[];

  constructor(private dogService:DogsService) { }

  ngOnInit() {
      //Observable<Dog[]>
      this.dogService.findDogs().subscribe(data=>{
          this.dogs=data;
          console.log(this.dogs);
       });
        console.log(")#(#(#(#This statement will get printed*#*#*#*#");
  }

}
