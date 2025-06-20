import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

import { ContactRoutingModule } from './contact-routing.module';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SharedModule } from '../shared/shared.module';
import {DetailCarritoComponent} from "../comonents/detail-carrito/detail-carrito.component";


@NgModule({
  declarations: [
    FormContactComponent,
    ContactComponent,
  ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        SharedModule,
        IonContent,
        DetailCarritoComponent,
    ]
})
export class ContactModule { }
