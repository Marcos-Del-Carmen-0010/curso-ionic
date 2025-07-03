import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import {FirebaseService} from "./services/firebase.service";
import {HomeModel} from "./models/Home.models";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor(private _serviceFireBase: FirebaseService) {
    this.saveProduct();
  }

  async saveProduct() {
    console.log("Saving product");
    const data:HomeModel.Store.IProducto = {
      title: 'Hotdog',
      description: 'Contiene una salchica envuelta en tocino con verduras frescas',
      price: 5,
      image: 'https://url...',
      cantidad: 10
    }

    try {
      await this._serviceFireBase.crearColecion<HomeModel.Store.IProducto>('Products', data);
      console.log("Saving product");
    } catch(err) {
      console.error("Error saving product: ", err);
    }
  }
}
