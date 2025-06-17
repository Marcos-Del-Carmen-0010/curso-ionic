import {Component, OnDestroy, OnInit} from '@angular/core';
import { addIcons } from 'ionicons';
import { home, storefront, call, search } from 'ionicons/icons';
import {CarritoService} from "../../../services/carrito.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit, OnDestroy {
  public cantidad: number;
  public subcriptionCarrito : Subscription;

  constructor(private _serviceCarrito: CarritoService) {
    addIcons({ home, storefront, call, search });
    this.cantidad = 0;
  }

  ngOnInit() {
    this.cantidad = this._serviceCarrito.carrito.cantidadTotal;
    this._serviceCarrito.getCarritoChanges().subscribe(change=> {
      this.cantidad = change.cantidadTotal;
    });
  }

  ngOnDestroy() {
    this.subcriptionCarrito?.unsubscribe();
  }

}
