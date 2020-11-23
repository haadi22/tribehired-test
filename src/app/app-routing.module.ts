import { MonitorComponent } from './monitor/monitor/monitor.component';
import { AppComponent } from './app.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';

// import { MonitorComponent } from './Monitor/task4.component';
import { HeaderComponent } from './monitor/header/header.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  
  { path: 'task1', component: MonitorComponent },
  { path: 'task2', component: Task2Component },
  { path: 'task3', component: Task3Component },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
