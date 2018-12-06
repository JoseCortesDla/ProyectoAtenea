import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PublicacionSalaPage } from './publicacion-sala';
import {ComentariosPage} from '../comentarios/comentarios';
import { PerfilPage } from '../perfil/perfil';
import { SalasProvider } from '../../providers/api/salas';
import { MomentPipe } from '../../pipes/moment/moment';
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
            constructor(public navCtrl: NavController, 
                        public navParams: NavParams,
                        private _sp:SalasProvider,
                        private moment:MomentPipe) {
    this.sala=this.navParams.get("sala");
   console.log(navParams);
   this._sp.idesala(1);
  }

  perfil(pregun:any){
    this.navCtrl.push(PerfilPage,{pregun})
  }
  
  irPubli(sala:any) {
    this.navCtrl.push(PublicacionSalaPage,{'sala':this.sala})
  }

  irComment(){
  	this.navCtrl.push(ComentariosPage)
  }

 
}
