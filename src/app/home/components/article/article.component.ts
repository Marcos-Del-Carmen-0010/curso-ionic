import { Component, OnInit } from '@angular/core';
import { HomeModel } from 'src/app/models/Home.models';

import { addIcons } from 'ionicons';
import { add, heart, remove } from 'ionicons/icons';
@Component({
  selector: 'app-article',
  standalone: false,
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  public articles: HomeModel.Articulo.IArticulo[] = [];
  public cargando: boolean = true;
  public cant: number;
  public total: number;

  constructor() { 
    addIcons({ heart, add, remove });
    this.cant = 0;
    this.total = 0;
  }

  ngOnInit() {
    this.loadArticle();
  }

  loadArticle() {
    setTimeout(() => {
      this.articles = [
        {
          id: 1,
          title: 'Pizza Margherita',
          description: 'Clásica pizza italiana con tomate, mozzarella y albahaca fresca.',
          price: 12,
          image: {
            url: 'https://ionicframework.com/docs/img/demos/card-media.png',
            desc: 'Imagen de Pizza Margherita'
          }
        },
        {
          id: 2,
          title: 'Hamburguesa Clásica',
          description: 'Jugosa hamburguesa con queso, lechuga, tomate y salsa especial.',
          price: 10,
          image: {
            url: 'https://ionicframework.com/docs/img/demos/card-media.png',
            desc: 'Imagen de Hamburguesa Clásica'
          }
        },
        {
          id: 3,
          title: 'Sushi Variado',
          description: 'Selección de sushi fresco con salmón, atún y aguacate.',
          price: 15,
          image: {
            url: 'https://ionicframework.com/docs/img/demos/card-media.png',
            desc: 'Imagen de Sushi Variado'
          }
        },
        {
          id: 4,
          title: 'Ensalada César',
          description: 'Ensalada fresca con pollo, crutones, queso parmesano y aderezo César.',
          price: 8,
          image: {
            url: 'https://ionicframework.com/docs/img/demos/card-media.png',
            desc: 'Imagen de Ensalada César'
          }
        }
      ];
      this.cargando = false;
    }, 3000);
  }

  addProduct(product: HomeModel.Articulo.IArticulo) {
    this.cant++;
    this.total += product.price;
  }
  
  removeProduct(product: HomeModel.Articulo.IArticulo) {
    this.cant--;
    this.total -= product.price;
    if (this.cant < 0) {
      this.cant = 0;
      this.total = 0;
    }
  }

  validateInput(event: Event )  {
    console.log('Evento de validación:', event.target);
  }

}