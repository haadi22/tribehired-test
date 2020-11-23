import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HeaderComponent } from './monitor/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonitorComponent } from './monitor/monitor/monitor.component';
import {MonitorModule} from './monitor/monitor.module';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { Task4Component } from './task4/task4.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    MonitorComponent,
    HeaderComponent,
    Task2Component,
    Task3Component,
    Task4Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MonitorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]

  

})
export class AppModule { }
