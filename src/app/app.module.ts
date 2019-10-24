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
import { CustInfoComponent } from './cust-info/cust-info.component';
import {FormsModule} from '@angular/forms';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InstallmentComponent } from './installment/installment.component';
import { AdvanceComponent } from './advance/advance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { DataService } from './data.service';
import{Global} from '../app/global';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    ProcessComponent,
    CustInfoComponent,
    DashboardComponent,
    InstallmentComponent,
    AdvanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    HttpModule
  ],
  providers: [DataService, Global,],
  bootstrap: [AppComponent]
})
export class AppModule { }
