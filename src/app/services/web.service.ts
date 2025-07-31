import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http: HttpClient) { }

  request<Response>(type: 'POST' | 'GET', url: string, path:string, body?: any) {
    return new Promise<Response>((resolve, reject) => {
      const  headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

      if(type === 'POST') {
        this.http.post<Response>(url + '/' + path, body, {headers}).subscribe((data:any)=>{
          resolve(data);
          return;
        })
      }

      if(type === 'GET') {
        this.http.get<Response>(url + '/' + path, {headers}).subscribe((data:any)=>{
          resolve(data);
          return;
        })
      }
    })

  }
}
