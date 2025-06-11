import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeModel } from 'src/app/models/Home.models';
import { ToastService } from 'src/app/services/toast.service';
import { addIcons } from 'ionicons';
import { add, remove } from 'ionicons/icons';
@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {

  public cantidad: number;

  @Input() product: HomeModel.Store.IProducto;
  @Input() carrito: HomeModel.Store.ICarrito;

  constructor(
    private _serviceToast: ToastService,
  ) {
    addIcons({ add, remove });
    this.cantidad = 0;
  }

  ngOnInit() { 
    console.log('producto: ', this.product);
  }

  addProduct(product: HomeModel.Store.IProducto) {
    let exist = false;
    if (product.cantidad < 0) {
      this._serviceToast.showToastBottom('Se agotarón las existencias de ' + product.title);
      return;
    }
    product.cantidad--;
    this.cantidad++;
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
    if(this.cantidad > 0) {
      this.cantidad--;
    }
    const exits = this.carrito.productos.find((productCart: any) => productCart.items.id === product.id);
    if (exits) {
      exits.cant--;
      if (exits.cant <= 0) { 
        // cuando llega a 0 entonces filtra para eliminarlo del carrito y no del catalogo de productos
        let resetProduct = this.carrito.productos.filter((productCart: any) => {
          productCart.items.id !== product.id
        })
        this.carrito.productos = resetProduct;
      }
      product.cantidad++;
    }
    this.getTotal();
  }
}
