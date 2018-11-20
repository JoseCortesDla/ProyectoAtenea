import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import {PublicacionPage} from './publicacion';
import { ComentariosPage } from '../comentarios/comentarios';
import { PcPage } from './pc';
import { ForoProvider } from '../../providers/api/foro';
import { PerfilPage } from '../perfil/perfil';

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
            private _fp:ForoProvider
            ) {     
    this.pet='Preguntas';
    this._fp.allpre();
    //this._fp.categorias();
    this._fp.repuestaspre();
  }


  addpublicacion(){
    this.navCtrl.push(PublicacionPage)
  }
  
  cate(cat:any){
    this.navCtrl.push(PcPage,{cat})
  }
  comentario(){
    this.navCtrl.push(ComentariosPage)
  }

  perfil(us:any){
    this.navCtrl.push(PerfilPage,{us})

  }

}
