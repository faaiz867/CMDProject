import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProcessComponent } from './process/process.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ProcessComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
