// import { MonitorComponent } from './../../monitor/monitor/monitor.component';
// import { Monitor } from './../../monitor/monitor';
import { Task2Component } from '../task2/task2.component';
import { Injectable } from '@angular/core';
import { Monitor } from './monitor';

import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MonitorService {
  private apiUrl = '/api';
  constructor(private http: Http) { }


  findAll(): Promise<Array<Monitor>> {
    const url = `https://jsonplaceholder.typicode.com/posts`;
    console.log('findAll =>',url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  findById(post_id:string): Promise<Monitor> {
    console.log('post_id =>',post_id);
    const url = `https://jsonplaceholder.typicode.com/posts/${post_id}`;
    console.log('findById =>',url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  findAllById(post_id:string): Promise<Array<Monitor>> {
    console.log('post_id =>',post_id);
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${post_id}`;
    console.log('findAllById =>',url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Monitor[])
      .catch(this.handleError);
  }





  private handleError(error: any): Promise<Array<any>> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
