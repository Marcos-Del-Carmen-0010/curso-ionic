import { Component, OnInit } from '@angular/core';
import { HomeModel } from 'src/app/models/Home.models';
import { ToastService } from 'src/app/services/toast.service';

import { addIcons } from 'ionicons';
import { add, heart, push, remove } from 'ionicons/icons';
import { ArticleService } from 'src/app/services/article.service';
@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  public articles: HomeModel.Store.IProducto[] = [];
  public carrito: HomeModel.Store.ICarrito;
  public readonly MAX_PRODUCTS: number = 100;

  public cargando: boolean = true;
  public cant: number;

  constructor(
    private _serviceToast: ToastService,
    private _serviceArticle :ArticleService,
  ) { 
    addIcons({ heart, add, remove });
    this.cant = 0;
  }

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
      this._serviceArticle.catArticles().subscribe((articles: HomeModel.Store.IProducto[]) => {
        this.articles = articles;
      }, (error: any) => {
        console.error('Error al cargar los artículos:', error)
      });
      this.cargando = false;
    }, 3000);
  }

  addProduct(product: HomeModel.Store.IProducto) {  
    let exist = false;  
    if (product.cantidad < 0) {
      this._serviceToast.showToastBottom('Se agotarón las existencias de ' + product.title);
      return;
    }
    product.cantidad--;
    this.carrito.productos.every((item:any) => {
      if (item.items.id == product.id) {
        item.cant++;
        exist = true;
        return false;
      }
      return true;
    });
    if(!exist) {
      this.carrito.productos.push({
        items: product,
        cant: 1,
      });
    }
    this.getTotal();
  }

  getTotal() {
    let total = 0;
    let cantidadTotal = 0;
    this.carrito.productos.forEach((item: any) => {
      total = total + (item.cant * item.items.price);
      cantidadTotal = cantidadTotal + item.cant;
    });
    this.carrito.total = total;
    this.carrito.cantidadTotal = cantidadTotal;
  }
  
  removeProduct(product: HomeModel.Store.IProducto) {
    const exits = this.carrito.productos.find((productCart: any) => productCart.items.id === product.id);
    if (exits) {
      exits.cant--;
      if (exits.cant <= 0) { 
        // cuando llega a 0 entonces filtra para eliminarlo del carrito y no del catalogo de productos
        let resetProduct = this.carrito.productos.filter((productCart: any) => {
          productCart.items.id !== product.id
        })
        this.carrito.productos = resetProduct;
      }
      product.cantidad++;
    }
    this.getTotal();
  }

  validateInput(event: Event )  {
    console.log('Evento de validación:', event.target);
  }

}