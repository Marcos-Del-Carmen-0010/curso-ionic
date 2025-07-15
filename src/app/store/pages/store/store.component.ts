import { Component, OnInit } from '@angular/core';
import { HomeModel } from 'src/app/models/Home.models';
import {ArticleService} from "../../../services/article.service";
import {CarritoService} from "../../../services/carrito.service";
import {FirebaseService} from "../../../services/firebase.service";

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
  public categoriaSelect: string;

  public categorias = [
    {
      name: 'Fast food',
      id: 'fastfood'
    },
    {
      name: 'Drinks',
      id: 'drinks',
    },
    {
      name: 'Seafood',
      id: 'seafood'
    }
  ];
  public cargando: boolean = true;
  constructor(
    private _serviceArticle :ArticleService,
    private _serviceCarrito :CarritoService,
    private _serviceFireBase: FirebaseService,
  ) {
    this.categoriaSelect = 'fastfood';
  }

  ngOnInit() {
    // this.loadArticle();
    this.getProducts();
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

  getProducts() {
    const path = 'Products';
    this._serviceFireBase.getDocuments<HomeModel.Store.IProducto>(path, true).subscribe((res:any)=>{
      this.articles = res;
    })
  }

  async getCategoria(id?: string) {
    this.categoriaSelect = id;
    if (this.categoriaSelect != id) {
      this.articles = null;
      this.cargando = true;

    }
    const numsItems = 2;
    const path = 'Products';
    let query = [['categories','array-contains', id]];
    const extras = {
      orderParam: 'date',
      directionSort: 'asc',
      limit: numsItems,
    }

    if(this.articles) {
      const last = this.articles[this.articles.length - 1];
      const snapDoc = await this._serviceFireBase.getDocument(`${path}/${last.id}`)
      // @ts-ignore
      extras.startAfter = snapDoc
    }

    this._serviceFireBase.getDocumentsQueryChanges(path, query, extras).subscribe( (res: any) => {
      console.log('res -> ', res);
      if (this.articles) {
        res.forEach( (itemNew: any) => {
          const exist = this.articles.findIndex( (item: any) => { return item.id === itemNew.id})
          if (exist >=0 ) {
            this.articles[exist] = itemNew
          } else {
            this.articles.push(itemNew);
          }
        });
      } else {
        this.articles = res;
      }
      this.cargando = false;
    });
  }
}
