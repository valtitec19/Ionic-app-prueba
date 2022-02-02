import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  loading =  new Subject<boolean>();

  constructor(private toastController: ToastController) { }

  async showMessage(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }



}
