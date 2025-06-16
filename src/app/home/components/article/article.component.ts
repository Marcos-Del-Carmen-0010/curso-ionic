import { Component, OnInit } from '@angular/core';
import { HomeModel } from 'src/app/models/Home.models';

import { ArticleService } from 'src/app/services/article.service';
import {CarritoService} from "../../../services/carrito.service";
@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  public articles: HomeModel.Store.IProducto[] = [];
  public carrito: HomeModel.Store.ICarrito;

  public cargando: boolean = true;

  constructor(
    private _serviceArticle :ArticleService,
  ) { }

  ngOnInit() {
    this.loadArticle();
    this.initCarrito();
  }

  initCarrito() {
    this.carrito = {
      total: 0,
      cantidadTotal: 0,
      productos: []
    };
  }

  loadArticle() {
    setTimeout(() => {
      this._serviceArticle.getArticles().subscribe((articles: HomeModel.Store.IProducto[]) => {
        this.articles = articles;
      }, (error: any) => {
        console.error('Error al cargar los artículos:', error)
      });
      this.cargando = false;
    }, 3000);
  }

  validateInput(event: Event )  {
    console.log('Evento de validación:', event.target);
  }
}
