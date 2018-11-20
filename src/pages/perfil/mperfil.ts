import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ModalController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TabsPage} from '../tabs/tabs';
import { InicioPage} from '../inicio/inicio';
import { CategoriaPage } from './categoria';
import {ApiProvider} from  '../../providers/api/api';
import { PerfilProvider } from  '../../providers/api/perfil';


@Component({
  selector: 'page-mperfil',
  templateUrl: 'mperfil.html',
})
export class MperfilPage {

	user:any={};
 
 formularioUsuario: any;

  constructor(
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private fb: FormBuilder,
    private _us:ApiProvider,
    private _pp:PerfilProvider,
    private alert:AlertController,
    public navParams:NavParams,
    public md:ModalController
  ) {
    
    this.user=this.navParams.get("pregun");
    
  }

  
cat(){
  let modal=this.md.create(CategoriaPage);
  modal.present();

  modal.onDidDismiss(parametros=>{
    console.log(parametros);
  })
}
  //carga los datos del perfil
  
data={ name:this._us.me.name, 
       app:this._us.me.apellidoP,
       apm:this._us.me.apellidoM,
        nick:this._us.me.nick,
      bio:this._us.me.biografia,
       lema: this._us.me.lema};
       
   update(){
     
      this._pp.crear(
                             this.data.app,
                             this.data.apm,
                             this.data.bio,
                             this.data.lema,
                             this.data.name,
                             this.data.nick)
      .subscribe(()=>{
        this.navCtrl.pop()
      })
      
   }
  


}
