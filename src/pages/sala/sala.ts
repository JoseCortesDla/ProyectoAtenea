import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PublicacionSalaPage } from './publicacion-sala';
import {PublicacionPage} from '../publicacion/publicacion';
import {ComentariosPage} from '../comentarios/comentarios';
import { PerfilPage } from '../perfil/perfil';

/**
 * Generated class for the SalaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-sala',
  templateUrl: 'sala.html',
})
export class SalaPage {
sala:any={};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sala=this.navParams.get("sala");
   console.log(navParams);
  }

perfil(pregun:any){
  this.navCtrl.push(PerfilPage,{pregun})
}
  irPublicacion() {
    this.navCtrl.push(PublicacionSalaPage)
  }


  irComment(){
  	this.navCtrl.push(ComentariosPage)
  }

  irPubli(){
    this.navCtrl.push(PublicacionPage)
  }
}
