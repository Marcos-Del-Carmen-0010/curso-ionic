import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {HomeModel} from "../../../models/Home.models";
import {WebService} from "../../../services/web.service";
import {ActivatedRoute} from "@angular/router";
import {SharedModule} from "../../../shared/shared.module";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.scss'],
  imports: [
    IonicModule,
    SharedModule
  ]
})
export class ArticlePageComponent  implements OnInit {
  public article: HomeModel.Store.IArticle;
  public title: string;

  constructor(
    private _serviceWeb: WebService,
    private _activateRoute: ActivatedRoute
  ) {
    this.title = '';
  }

  ngOnInit() {
    this.initRoute();
    this.title = 'Página del articulo';
  }

  async loadArticle(id: any) {
    const url = 'https://jsonplaceholder.typicode.com/';
    const path = 'posts/' + id;
    const res = await this._serviceWeb.request<HomeModel.Store.IArticle>('GET', url, path);
    if (res) {
      this.article = res;
    }
  }

  initRoute(){
    this._activateRoute.queryParams.subscribe(params => {
      if(params['id']) {
        this.loadArticle(params['id'])
      }
    });
  }

  // initRoute() {
  //   this._activateRoute.params.subscribe(params => {
  //     if (params['id']) {
  //       this.loadArticle(params['id'])
  //     }
  //   });
  // }
}
