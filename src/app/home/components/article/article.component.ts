import { Component, OnInit } from '@angular/core';
import { HomeModel } from 'src/app/models/Home.models';
@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent  implements OnInit {

  public articles: HomeModel.Articulo.IArticulo[] = [];

  constructor() { }

  ngOnInit() {
    this.loadArticle();
  }

  loadArticle() {
    this.articles = [
      {
        id: 1,
        title: 'Angular 16',
        description: 'Angular 16 es la última versión del framework de desarrollo web de Google.',
        price: 100,
        image: {
          url: 'https://ionicframework.com/docs/img/demos/card-media.png',
          desc: 'Logo de Angular'
        }
      }
    ]
  }

}