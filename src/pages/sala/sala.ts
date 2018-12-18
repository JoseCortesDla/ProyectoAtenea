import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PublicacionSalaPage } from './publicacion-sala';
import {ComentariosPage} from '../comentarios/comentarios';
import { PerfilPage } from '../perfil/perfil';
import { SalasProvider } from '../../providers/api/salas';
import { TareasPage } from './tareas';
import {MiembrosPage } from './miembros';

@Component({
  selector: 'page-sala',
  templateUrl: 'sala.html',
})
export class SalaPage {
sala:any={};
            constructor(public navCtrl: NavController, 
                        public navParams: NavParams,
                        private _sp:SalasProvider,
                        ) {
    this.sala=this.navParams.get("sala");
   console.log(navParams);
   this._sp.idesala(this.sala.id);
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

   tarea(){
     this.navCtrl.push(TareasPage,{'sala':this.sala})
   }
}
