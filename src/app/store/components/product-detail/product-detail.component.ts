import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HomeModel } from 'src/app/models/Home.models';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent  implements OnInit {

  public cantidad: number;

  @Input() product: HomeModel.Store.IProducto;
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() { 
    this.cantidad = 0;
  }

  ngOnInit() { }

  addProduct(product: HomeModel.Store.IProducto) {  
    if (product.cantidad > 0) {
      this.add.emit(product);
      this.cantidad++;
    } 
  }
  
  removeProduct(product: HomeModel.Store.IProducto) {
    this.remove.emit(product);
    if (this.cantidad > 0) {
      this.cantidad--;
    }
  }
}
