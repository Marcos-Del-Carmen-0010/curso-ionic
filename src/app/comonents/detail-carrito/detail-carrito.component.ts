import { Component, OnDestroy, OnInit } from '@angular/core';
import {CarritoService} from "../../services/carrito.service";
import {HomeModel} from "../../models/Home.models";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-carrito',
  templateUrl: './detail-carrito.component.html',
  styleUrls: ['./detail-carrito.component.scss'],
})
export class DetailCarritoComponent  implements OnInit, OnDestroy {
  public carrito: HomeModel.Store.ICarrito;
  private sub: Subscription;

  constructor(private _carritoService: CarritoService) { }

  ngOnInit() {
    this.carrito = this._carritoService.carrito;
    this._carritoService.getCarritoChanges().subscribe(changes => {
      this.carrito = changes;
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

}
