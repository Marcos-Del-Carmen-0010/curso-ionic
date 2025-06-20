import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  request(type: 'POST' | 'GET', url: string, path:string, body?: any) {
    return new Promise((resolve, reject) => {
      const  headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      if(type === 'POST') {
        this.http.post(url + '/' + path, body, {headers}).subscribe((data:any)=>{
          resolve(data);
          return;
        })
      }

      if(type === 'GET') {
        this.http.get(url + '/' + path, {headers}).subscribe((data:any)=>{
          resolve(data);
          return;
        })
      }
    })

  }
}
