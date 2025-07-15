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
    // this.saveProduct();
    // this.updateProduct();
    // this.getProducts();
  }

  async saveProduct() {
    console.log("Saving product");
    /*
        const productos: HomeModel.Store.IProducto[] = [
          {
            title: 'Hamburguesa Clásica',
            description: 'Pan artesanal con carne 100% de res, queso cheddar y vegetales frescos',
            price: 8,
            image: 'https://example.com/hamburguesa.jpg',
            cantidad: 15,
            date: undefined,
            enable: true,
            categories: ['comida rápida']
          },
          {
            title: 'Pizza Pepperoni',
            description: 'Pizza con queso mozzarella y abundantes rebanadas de pepperoni',
            price: 12,
            image: 'https://example.com/pizza.jpg',
            cantidad: 20,
            date: undefined,
            enable: true,
            categories: ['italiana']
          },
          {
            title: 'Tacos al Pastor',
            description: 'Tortillas suaves con carne de cerdo marinada y piña asada',
            price: 6,
            image: 'https://example.com/tacos.jpg',
            cantidad: 25,
            date: undefined,
            enable: false,
            categories: ['mexicana']
          },
          {
            title: 'Ensalada César',
            description: 'Lechuga fresca, crutones, parmesano y aderezo césar',
            price: 7,
            image: 'https://example.com/ensalada.jpg',
            cantidad: 12,
            date: undefined,
            enable: true,
            categories: ['saludable']
          },
          {
            title: 'Sushi Roll California',
            description: 'Rollos de arroz rellenos de cangrejo, pepino y aguacate',
            price: 10,
            image: 'https://example.com/sushi.jpg',
            cantidad: 18,
            date: undefined,
            enable: true,
            categories: ['japonés']
          }
        ];
      */

    const data:HomeModel.Store.IProducto = {
      title: 'Pizza Pepperoni',
      description: 'Pizza con queso mozzarella y abundantes rebanadas de pepperoni',
      price: 12,
      image: 'https://example.com/pizza.jpg',
      cantidad: 20,
      date: undefined,
      enable: true,
      categories: ['italiana']
    }
    /*
    const data:HomeModel.Store.IProducto = {
    }*/


    try {
      await this._serviceFireBase.crearColecion<HomeModel.Store.IProducto>('Products', data);
      console.log("Saving product");
    } catch(err) {
      console.error("Error saving product: ", err);
    }
  }

  async updateProduct() {
    console.log('update product');
    const path = 'Products/' + 'm5T9L8GsjBC54Os912FH';
    const  updateDoc = {
      cantidad: 30
    }

    try {
      await this._serviceFireBase.updateDocument(path, updateDoc);
    } catch (e){
      console.error('Error updating product with ID: ', e);
    }
  }

  async deleteProduct() {
    const path = 'Products/' + 'm5T9L8GsjBC54Os912FH';
    try {
      await this._serviceFireBase.deteleDocument(path);
      console.log("Delete product");
    } catch(err) {
      console.error('Error deleting product with ID: ', err);
    }
  }



  getProducts() {
    const path = 'Products';
    this._serviceFireBase.getDocuments<HomeModel.Store.IProducto>(path, true).subscribe((res:any)=>{
      console.log('response: ', res);
    })
  }
}
