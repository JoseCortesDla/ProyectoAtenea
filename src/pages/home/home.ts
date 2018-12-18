import { Http,URLSearchParams } from '@angular/http';
import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';

import { Refresher, reorderArray ,LoadingController}  from "ionic-angular";
import { ApiProvider} from  '../../providers/api/api';
import { ForoProvider } from '../../providers/api/foro';
import { MenuperfilPage } from '../menuperfil/menuperfil';
import { MperfilPage } from '../perfil/mperfil';
import { PerfilPage } from '../perfil/perfil';
import { TabsPage } from '../tabs/tabs';
import { InicioPage} from '../inicio/inicio';
import {ComentariosPage} from '../comentarios/comentarios';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController,
  				private _us:ApiProvider,          
          private http:Http,
          private _fp:ForoProvider,
          private toast:ToastController,
          public loadingCtrl:LoadingController) {
    this.presentLoadingDefault();
    this._us.midatos();
   this._us.prueba();  
  }

irPerfil(pregun:any){
  this.navCtrl.push(PerfilPage,{pregun})
}
  recargar_animales( refresher:Refresher ){

    console.log("Inicio del refresh");

    setTimeout( ()=>{

          console.log("Termino el refresh");
          //this.home = ANIMALES.slice(0);
          refresher.complete();

    },1500)

  }

  menuPerfil(){
    this.navCtrl.push(MenuperfilPage)
  }

perfil(pregun:any){
  this.navCtrl.push(PerfilPage,{pregun})
}
   miperfil(){
  this.navCtrl.push(PerfilPage)
}
irComment(){
  this.navCtrl.push(ComentariosPage)
}

recargar(refresher:Refresher){
  this.presentToast();
  setTimeout(()=>{
    this._us.prueba();  
    refresher.complete();
  },1500)
}


presentToast() {
  let toast = this.toast.create({
    message: 'Cargando....',
    duration: 2000,
    position: 'top'
  });
    toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });
 toast.present();
}

presentLoadingDefault() {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 5000);
}



}
