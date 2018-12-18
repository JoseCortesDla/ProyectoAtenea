import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PublicacionSalaPage } from './publicacion-sala';
import {ComentariosPage} from '../comentarios/comentarios';
import { PerfilPage } from '../perfil/perfil';
import { SalasProvider } from '../../providers/api/salas';


@Component({
  selector: 'page-miembros',
  templateUrl: 'miembros.html',
})
export class MiembrosPage {
sala:any={};
            constructor(public navCtrl: NavController, 
                        public navParams: NavParams,
                        private _sp:SalasProvider,
                        ) {
    this.sala=this.navParams.get("sala");
   console.log(navParams);
   this._sp.idesala(this.sala.id);
  }
}