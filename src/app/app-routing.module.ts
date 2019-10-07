import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import { ProcessComponent } from './process/process.component';


const routes: Routes = [
  { path: '', component: LoginComponent},
   {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'process', component: ProcessComponent},
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
