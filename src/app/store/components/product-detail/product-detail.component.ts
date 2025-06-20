import { Component, Input, OnInit } from '@angular/core';
import { HomeModel } from 'src/app/models/Home.models';
import { addIcons } from 'ionicons';
import { add, remove } from 'ionicons/icons';
import {CarritoService} from "../../../services/carrito.service";

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {
  public cantidad: number;

  @Input() product: HomeModel.Store.IProducto;
  public carrito: HomeModel.Store.ICarrito;

  constructor(
    private _serviceCarrito: CarritoService,
  ) {
    addIcons({ add, remove });
  }

  ngOnInit() {
    this.cantidad = 0;
  }

  addProduct(product: HomeModel.Store.IProducto) {
    this._serviceCarrito.addProduct(product);
    this.carrito = this._serviceCarrito.carrito;
    this.cantidad++;
  }

  removeProduct(product: HomeModel.Store.IProducto) {
    this._serviceCarrito.removeProduct(product);
    this.carrito = this._serviceCarrito.carrito;
    if(this.cantidad > 0) {
      this.cantidad--;
    }
  }
}
