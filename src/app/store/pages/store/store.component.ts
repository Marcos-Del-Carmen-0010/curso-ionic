import { Component, OnInit } from '@angular/core';
import { HomeModel } from 'src/app/models/Home.models';
import {ArticleService} from "../../../services/article.service";
import {CarritoService} from "../../../services/carrito.service";

@Component({
  selector: 'app-store',
  standalone: false,
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent  implements OnInit {
  public title = 'Tienda';
  public articles: HomeModel.Store.IProducto[] = [];
  public carrito: HomeModel.Store.ICarrito;

  public cargando: boolean = true;

  constructor(
    private _serviceArticle :ArticleService,
    private _serviceCarrito :CarritoService,
  ) { }

  ngOnInit() {
    this.loadArticle();
    this.initCarrito();
    this.carrito = this._serviceCarrito.carrito;
    this._serviceCarrito.getCarritoChanges().subscribe(change=> {
      this.carrito = change;
    });
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
