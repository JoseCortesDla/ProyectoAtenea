import { Component } from '@angular/core';
import { NavController,Refresher } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import {PublicacionPage} from './publicacion';
import { ComentariosPage } from '../comentarios/comentarios';
import { PcPage } from './pc';
import { ForoProvider } from '../../providers/api/foro';
import { PerfilPage } from '../perfil/perfil';
import { PerfilProvider } from '../../providers/api/perfil';

@Component({
  selector: 'page-foro',
  templateUrl: 'foro.html'
})
export class ForoPage {

  users: any[] = [];
  pet:string

  constructor(
            public navCtrl: NavController,
            public userService: ApiProvider,
            private _us:ApiProvider,
            private _fp:ForoProvider,
            private _pp:PerfilProvider
            ) {     
    this.pet='Preguntas';
    this._fp.allpre();
    //this._fp.categorias();
    this._fp.mispre();
  }


  addpublicacion(){
    this.navCtrl.push(PublicacionPage)
  }
  
  cate(cat:any){
    this.navCtrl.push(PcPage,{cat})
  }
  comentario(pregun:any){
    this.navCtrl.push(ComentariosPage,{pregun})
  }

  perfil(us:string){
    this._pp.infous(us);
    this.navCtrl.push(PerfilPage)

  }

  recargar(refresher:Refresher){
  setTimeout(()=>{
    this._fp.categorias();  
    this._fp.allpre();
    //this._fp.mispres();
    //this._fp.repuestaspre();
    refresher.complete();
  },1500)
}

}
