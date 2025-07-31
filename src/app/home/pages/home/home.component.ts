import { Component, OnInit } from '@angular/core';
import {WebService} from "../../../services/web.service";
import {HomeModel} from "../../../models/Home.models";

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  public title: string = 'Inicio';
  public articles: HomeModel.Store.IArticle[] = [];

  constructor(private _serviceWeb: WebService) { }

  ngOnInit() {
    this.getAricles();
    // this.createArticle();
  }

  async getAricles() {
    const url = 'https://jsonplaceholder.typicode.com/';
    const res = await this._serviceWeb.request<HomeModel.Store.IArticle[]>('GET', url, 'posts');

    if(res) {
      this.articles = res;
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
  }

}
