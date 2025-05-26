import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

import { StoreRoutingModule } from './store-routing.module';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StoreComponent } from './pages/store/store.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    StoreComponent,
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    IonContent,
    SharedModule,
  ]
})
export class StoreModule { }
