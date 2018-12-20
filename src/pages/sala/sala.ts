import { Component } from '@angular/core';
import { NavController, NavParams, Refresher } from 'ionic-angular';
import { PublicacionSalaPage } from './publicacion-sala';
import {ComentariosPage} from '../comentarios/comentarios';
import { PerfilPage } from '../perfil/perfil';
import { SalasProvider } from '../../providers/api/salas';
import { TareasPage } from './tareas';
import {MiembrosPage } from './miembros';
import { PerfilProvider } from '../../providers/api/perfil';

@Component({
  selector: 'page-sala',
  templateUrl: 'sala.html',
})
export class SalaPage {
sala:any={};
            constructor(public navCtrl: NavController, 
                        public navParams: NavParams,
                        private _sp:SalasProvider,
                        private _pp:PerfilProvider,
                        ) {
    this.sala=this.navParams.get("sala");
   console.log(navParams);
   this._sp.idesala(this.sala.id);
  }

  perfil(us:string){
    this._pp.infous(us);
    this.navCtrl.push(PerfilPage)
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
   
    miembros(){
     this.navCtrl.push(MiembrosPage)
   }


recargar(refresher:Refresher){
  setTimeout(()=>{
   this._sp.idesala(this.sala.id);
    refresher.complete();
  },1500)
}

  sig_pag(infiniteScroll){

    this._sp.idesala(this.sala.id)
        .then( ()=>{
          infiniteScroll.complete();
        })
  }

  
}
