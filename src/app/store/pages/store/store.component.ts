import { Component, OnInit } from '@angular/core';
import { HomeModel } from 'src/app/models/Home.models';

@Component({
  selector: 'app-store',
  standalone: false,
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent  implements OnInit {
  public title = 'Tienda';
  public pedido: HomeModel.Store.IPedido = {};

  constructor() { }

  ngOnInit() {}

}
