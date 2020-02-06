import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DogsComponent } from './dogs/dogs.component';
import { AddDogComponent } from './add-dog/add-dog.component';


const routes: Routes = [
  {path:'',redirectTo:'auth',pathMatch:'full'},
  {path:'auth',component:LoginComponent},
  {path:'dogs',component:DogsComponent},
  {path:'adddog',component:AddDogComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
