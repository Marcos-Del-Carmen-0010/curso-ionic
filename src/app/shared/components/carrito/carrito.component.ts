import { Component, OnInit } from '@angular/core';
import {HomeModel} from "../../../models/Home.models";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss'],
})
export class CarritoComponent  implements OnInit {
  public carrito: HomeModel.Store.ICarrito;

  constructor() {
  }

  ngOnInit() {
    console.log('Inicia el carrito.');
  }
}
