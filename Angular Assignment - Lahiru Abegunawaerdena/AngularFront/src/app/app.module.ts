import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './components/navbar/navbar.component';
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import { HomepageComponent } from './components/homepage/homepage.component';
import { ProdAddComponent } from './components/prod-add/prod-add.component';
import {FlashMessageModule} from "angular-flash-message/dist";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    ProdAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessageModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
