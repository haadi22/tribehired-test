import { Component, OnInit } from '@angular/core';
import { Monitor } from "../monitor/monitor";
import { MonitorService } from "../monitor/monitor.service";
import { Router } from '@angular/router'


@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {

  public monitors: Monitor[];
  inputId: any;
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

  }

}
