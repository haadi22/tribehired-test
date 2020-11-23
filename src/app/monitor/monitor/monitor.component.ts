import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Monitor } from "../monitor";
import { MonitorService } from "../monitor.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css'],
  providers: [MonitorService],
  encapsulation: ViewEncapsulation.None
})
export class MonitorComponent implements OnInit {
  public monitors: Monitor[];
  constructor(private router: Router, private monitorservice: MonitorService) { }

  ngOnInit() {
    this.getAllData();

    console.log('get data =>',this.getAllData())
  }

  getAllData() {
    this.monitorservice.findAll().then(
      monitors => {
        this.monitors = monitors;
        console.log("data :",monitors);
      },
      err => {
        console.log(err)
      },
    );
  }

  
}
