import { Http,URLSearchParams } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Refresher, reorderArray }  from "ionic-angular";
import {ApiProvider} from  '../../providers/api/api';
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
          private http:Http) {
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
}
