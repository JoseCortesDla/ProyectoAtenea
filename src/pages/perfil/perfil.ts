import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,Refresher } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TabsPage} from '../tabs/tabs';
import { InicioPage} from '../inicio/inicio';
import {ApiProvider} from  '../../providers/api/api';
import { MperfilPage } from './mperfil';
import { ForoProvider } from '../../providers/api/foro';
import { PerfilProvider } from '../../providers/api/perfil';
import { ComentariosPage } from '../comentarios/comentarios';
import * as moment from 'moment';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

	user:any={};
 us:boolean=true;
 formularioUsuario: any;
   public date:any;
  constructor(
    public navCtrl: NavController,
     private alertCtrl: AlertController,
    private fb: FormBuilder,
    private _us:ApiProvider,
    private _fp:ForoProvider,
    private _pp:PerfilProvider,
    private alert:AlertController,
    public navParams:NavParams
  ) {
   
   // this.user=this.navParams.get("us");
    this.date=moment()
  }
comentario(pregun:any,name:string){
    this.navCtrl.push(ComentariosPage,{pregun,name})
  }
 

  mperfil(){
    this.navCtrl.push(MperfilPage)
  }

recargar(refresher:Refresher){
  setTimeout(()=>{
    this._pp.infous(this.user.nick);  
    refresher.complete();
  },1500)
}

}
