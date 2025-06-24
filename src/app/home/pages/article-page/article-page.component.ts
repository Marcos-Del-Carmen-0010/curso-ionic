import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {HomeModel} from "../../../models/Home.models";
import {WebService} from "../../../services/web.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
  imports: [
    IonicModule
  ]
})
export class ArticlePageComponent  implements OnInit {
  public article: HomeModel.Store.IArticle;

  constructor(
    private _serviceWeb: WebService,
    private _activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initRoute();
  }

  async loadArticle(id: any) {
    const url = 'https://jsonplaceholder.typicode.com/';
    const path = 'posts/' + id;
    const res = await this._serviceWeb.request<HomeModel.Store.IArticle>('GET', url, path);
    if (res) {
      this.article = res;
      console.log(this.article);
    }
  }

  initRoute(){
    this._activateRoute.params.subscribe(params => {
      this.loadArticle(params['id'])
    })
  }
}
