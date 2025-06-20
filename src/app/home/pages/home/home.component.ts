import { Component, OnInit } from '@angular/core';
import {WebService} from "../../../services/web.service";

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  public title: string = 'Inicio';
  public article: any;
  constructor(private _serviceWeb: WebService) { }

  ngOnInit() {
    this.getAricles();
    this.createArticle();
  }

  async getAricles() {
    const url = 'https://jsonplaceholder.typicode.com/';
    const res = await this._serviceWeb.request('GET', url, 'posts');
    console.log('response: ', res);
    if(res) {
      this.article = res;
    }
  }

  async createArticle() {
    const url = 'https://jsonplaceholder.typicode.com/';
    const data = {
      title: 'foo',
      body: 'bar',
      useId: 1
    }
    const res = await this._serviceWeb.request('POST', url, 'posts', data);
    console.log('response: ', res);
  }

}
