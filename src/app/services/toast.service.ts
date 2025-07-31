import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})

export class ToastService {

  constructor(
    private toastController: ToastController
  ) { }

  async showToastBottom(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'warning'
    });
    await toast.present();
  }
}
