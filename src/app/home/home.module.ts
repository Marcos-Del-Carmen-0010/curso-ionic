import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { SharedModule } from '../shared/shared.module';

import { ProductDetailComponent } from '../store/components/product-detail/product-detail.component';
import {DetailCarritoComponent} from "../comonents/detail-carrito/detail-carrito.component";
import {IonicModule} from "@ionic/angular";
@NgModule({
  declarations: [
    HomeComponent,
    ArticleComponent,
    ProductDetailComponent,
  ],
  exports: [
    ArticleComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    DetailCarritoComponent,
    IonicModule,
  ]
})
export class HomeModule { }
