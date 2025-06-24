import {Component, Input, OnInit} from '@angular/core';
import { HomeModel } from 'src/app/models/Home.models';
import {Router} from "@angular/router";

@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: HomeModel.Store.IArticle;

  constructor(private _router: Router) {}
  ngOnInit() {}

  goToArticle() {
    this._router.navigate([`/article/${this.article.id}`]);
  }
}
