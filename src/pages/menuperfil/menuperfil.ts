import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { MperfilPage } from '../perfil/mperfil';
import { InicioPage } from '../inicio/inicio';
import { AcercaPage } from './acerca';
import {ApiProvider} from  '../../providers/api/api';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-menuperfil',
  templateUrl: 'menuperfil.html',
})
export class MenuperfilPage {

  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              private _us:ApiProvider,
              private email:EmailComposer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuperfilPage');
  }
  	perfil(){
      let us=this._us.me;
  		this.navCtrl.push(PerfilPage,{us})
  	}

    cerrar_sesion(){
      this._us.cerrar_sesion();
      this.navCtrl.push(InicioPage)
    }

    acerca(){
       this.navCtrl.push(AcercaPage)
    }

    envio(){
      let email={
        to:"cdjo150951@upemor.edu.mx",
        cc:[],
        bcc:[],
        attachment:[],
        subject:"esto es",
        body:"una prueba",
        isHtml:false,
        app:"Gmail"
      }
      //this.email.send(email);
      //this.email.open(email);
    }
}
