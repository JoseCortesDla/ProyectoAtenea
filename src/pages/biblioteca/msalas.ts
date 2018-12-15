import { Component } from '@angular/core';
import { NavController,AlertController,ToastController,Refresher } from 'ionic-angular';
import { BibliotecaPage } from './biblioteca';
import { ApiProvider} from  '../../providers/api/api';
import { SalasProvider } from '../../providers/api/salas';

@Component({
  selector: 'page-msalas',
  templateUrl: 'msalas.html'
})
export class MsalasPage {

  constructor(
  		public navCtrl: NavController,
  		public alertCtrl:AlertController,
  		public toastCtrl: ToastController,
      private _us:ApiProvider,
      private _sp:SalasProvider) {
    
    this._us.cargar_storage();
    this._sp.inscrito();
    
  }

  irBiblioteca(sala:any){
  	this.navCtrl.push(BibliotecaPage,{sala})
  }


 presentToast() {
    const toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }

  recargar(refresher:Refresher){
  setTimeout(()=>{
    this._sp.inscrito();  
    refresher.complete();
  },1500)
}

}
