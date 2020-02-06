import { Component, OnInit } from '@angular/core';
import {Auth} from '../model/auth.model';
import { AuthService } from '../services/auth.service';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { TokenResponse } from '../model/token.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.styl']
})
export class LoginComponent implements OnInit {

  //String str=new String();
  public auth:Auth=new Auth();

  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit() {

  }

  public authUser():void {
      console.log(this.auth);
      this.authService.login(this.auth).subscribe((data:TokenResponse)=>{
          console.log(data);
          localStorage.setItem('userToken', data.token+'');
          //Forward request to Dog Listing Page
          //dogs
          this.router.navigate(['dogs']);
      });
  }

}
