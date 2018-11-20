import { Component } from '@angular/core';
import { NavController,AlertController,ToastController } from 'ionic-angular';
import { SalaPage } from '../sala/sala';
import {ApiProvider} from  '../../providers/api/api';
import { SalasProvider } from '../../providers/api/salas';

@Component({
  selector: 'page-salas',
  templateUrl: 'salas.html'
})
export class SalasPage {


  constructor(
  		public navCtrl: NavController,
  		public alertCtrl:AlertController,
  		public toastCtrl: ToastController,
      private _us:ApiProvider,
      private _sp:SalasProvider) {
    this._sp.salas();
    this._us.cargar_storage();
  }

  irSala(sala:any){
  	this.navCtrl.push(SalaPage,{sala})
  }

mutantes:any[] = [
    {
      nombre:"Luis",
      poder: "Mate "
    },
    {
      nombre: "Wolverine",
      poder: " Redes"
    },
    {
      nombre: "Profesor X",
      poder: "Programacion"
    }
  ];

  addSala() {
    const prompt = this.alertCtrl.create({
      title: 'Unirse a grupo',
      inputs: [
        {
          name: 'codigo',
          placeholder: 'Ingresa el codigo'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Unirse',
          handler: data => {
            console.log('Saved clicked');
            this.presentToast;
          }
        }
      ]
    });
    prompt.present();
  }

 presentToast() {
    const toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }

}
