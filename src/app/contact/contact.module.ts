import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import {DetailCarritoComponent} from "../comonents/detail-carrito/detail-carrito.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FormContactComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    DetailCarritoComponent,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ContactModule { }
