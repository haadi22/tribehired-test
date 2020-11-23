import { Component, OnInit } from '@angular/core';
import { Monitor } from "../monitor/monitor";
import { MonitorService } from "../monitor/monitor.service";
import { Router } from '@angular/router'

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  public monitors: Monitor[];
  public monit: Monitor;
  
  inputId: any;
  userId:any;
  Id:any;
  title:any;
  body:any;
  constructor(private router: Router, private monitorservice: MonitorService) { }

  ngOnInit(): void {
  }

  getAllDataById(inputId) {
    this.monitorservice.findAllById(inputId).then(
      monitors => {
        this.monitors = monitors;
        console.log("getAllDataById :",monitors);
      },
      err => {
        console.log(err)
      },
    );

    this.monitorservice.findById(inputId).then(
      monit => {
        this.userId = monit.userId;
        this.Id = monit.id;
        this.body = monit.body;
        this.title = monit.title;
        console.log("getDataById :",monit);
      },
      err => {
        console.log(err)
      },
    ); 
  }

  // getDataById(inputId) {
  //   let id = '1';
  //   this.monitorservice.findById(id).then(
  //     monit => {
  //       this.monit = monit;
  //       console.log("getDataById :",monit);
  //     },
  //     err => {
  //       console.log(err)
  //     },
  //   );
  // }

}
