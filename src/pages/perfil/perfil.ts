import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TabsPage} from '../tabs/tabs';
import { InicioPage} from '../inicio/inicio';
import {ApiProvider} from  '../../providers/api/api';
import { MperfilPage } from './mperfil';
import { ForoProvider } from '../../providers/api/foro';
import { PerfilProvider } from '../../providers/api/perfil';
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

	user:any={};
 us:boolean=true;
 formularioUsuario: any;

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
   
    //this.user=this.navParams.get("us");
    console.log(navParams);
  }

 

  mperfil(){
    this.navCtrl.push(MperfilPage)
  }


}
