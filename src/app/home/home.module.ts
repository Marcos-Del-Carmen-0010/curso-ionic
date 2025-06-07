import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput } from '@ionic/angular/standalone';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './components/article/article.component';
import { SharedModule } from '../shared/shared.module';
import { IonButton, IonIcon } from '@ionic/angular/standalone';
@NgModule({
  declarations: [
    HomeComponent,
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonContent,
    SharedModule,
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle,
    IonButton,
    IonIcon,
    IonInput
  ]
})
export class HomeModule { }
