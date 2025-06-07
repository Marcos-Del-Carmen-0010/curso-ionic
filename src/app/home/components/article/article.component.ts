import { Component, OnInit } from '@angular/core';
import { HomeModel } from 'src/app/models/Home.models';
import { ToastService } from 'src/app/services/toast.service';

import { addIcons } from 'ionicons';
import { add, heart, push, remove } from 'ionicons/icons';
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
    private toastService: ToastService
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
      this.articles = [
        {
          id: 1,
          title: 'Pizza Margherita',
          description: 'Clásica pizza italiana con tomate, mozzarella y albahaca fresca.',
          price: 12,
          cantidad: 1,
          image: 'https://ionicframework.com/docs/img/demos/card-media.png',
        },
        {
          id: 2,
          title: 'Hamburguesa Clásica',
          description: 'Jugosa hamburguesa con queso, lechuga, tomate y salsa especial.',
          price: 10,
          cantidad: 20,
          image: 'https://ionicframework.com/docs/img/demos/card-media.png',
        
        },
        {
          id: 3,
          title: 'Sushi Variado',
          description: 'Selección de sushi fresco con salmón, atún y aguacate.',
          price: 15,
          cantidad: 10,
          image: 'https://ionicframework.com/docs/img/demos/card-media.png',
        },
        {
          id: 4,
          title: 'Ensalada César',
          description: 'Ensalada fresca con pollo, crutones, queso parmesano y aderezo César.',
          price: 8,
          cantidad: 5,
          image: 'https://ionicframework.com/docs/img/demos/card-media.png',
        }
      ];
      this.cargando = false;
    }, 3000);
  }

  addProduct(product: HomeModel.Store.IProducto) {  
    let exist = false;  
    if (product.cantidad <= 0) {
      this.toastService.showToastBottom('Se agotarón las existencias de ' + product.title);
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
        // cuando llega a 0 entonces filtra para eliminarlo del carrito
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