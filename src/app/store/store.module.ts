import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

import { StoreRoutingModule } from './store-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { StoreComponent } from './pages/store/store.component';
import { SharedModule } from '../shared/shared.module';
import {DetailCarritoComponent} from "../comonents/detail-carrito/detail-carrito.component";


@NgModule({
  declarations: [
    ProductComponent,
    // ProductDetailComponent,
    StoreComponent,
  ],
    imports: [
        CommonModule,
        StoreRoutingModule,
        IonContent,
        SharedModule,
        DetailCarritoComponent,
    ]
})
export class StoreModule { }
