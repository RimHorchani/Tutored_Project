import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RiskComponent } from './risk/risk.component';



@NgModule({
  declarations: [
    AppComponent,
    RiskComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
