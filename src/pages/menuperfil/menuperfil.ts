import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { MperfilPage } from '../perfil/mperfil';
import { InicioPage } from '../inicio/inicio';
import { AcercaPage } from './acerca';
import {ApiProvider} from  '../../providers/api/api';
import { EmailComposer } from '@ionic-native/email-composer';
import { ForoProvider  } from '../../providers/api/foro';
import { PerfilProvider  } from '../../providers/api/perfil';
@Component({
  selector: 'page-menuperfil',
  templateUrl: 'menuperfil.html',
})
export class MenuperfilPage {

  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              private _us:ApiProvider,
              private _fp:ForoProvider,
              private _pp:PerfilProvider,
              private email:EmailComposer) {
    this._pp.infous(_us.me.nick);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuperfilPage');
  }
  	perfil(nick:string){      
      this._pp.infous(nick);
  		this.navCtrl.push(PerfilPage)
  	}

    cerrar(){
      this._us.cerrar_sesion();
      this._us.cargar_storage();
      if (!this._us.activo()) {
          this.navCtrl.push(InicioPage)   
         }
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
