import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent,IonIcon } from '@ionic/angular/standalone';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { DetailNotificationComponent } from './components/detail-notification/detail-notification.component';
import { IconNotificationComponent } from './components/icon-notification/icon-notification.component';


@NgModule({
  declarations: [
    NotificationsComponent,
    DetailNotificationComponent,
    IconNotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    IonContent,
    IonIcon,
  ],
  exports: [
    IconNotificationComponent,
  ]
})
export class NotificationsModule { }
