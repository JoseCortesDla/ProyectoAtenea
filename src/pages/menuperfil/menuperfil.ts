import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { MperfilPage } from '../perfil/mperfil';
import { InicioPage } from '../inicio/inicio';
import { AcercaPage } from './acerca';
import {ApiProvider} from  '../../providers/api/api';


@Component({
  selector: 'page-menuperfil',
  templateUrl: 'menuperfil.html',
})
export class MenuperfilPage {

  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              private _us:ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuperfilPage');
  }
  	miperfil(){
  		this.navCtrl.push(MperfilPage)
  	}

    cerrar_sesion(){
      this._us.cerrar_sesion();
      this.navCtrl.push(InicioPage)
    }

    acerca(){
       this.navCtrl.push(AcercaPage)
    }
}
