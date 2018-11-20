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
    console.log(this._us.me);
    console.log(this._us.me.name);
  }

  
cat(){
  let modal=this.md.create(CategoriaPage);
  modal.present();

  modal.onDidDismiss(parametros=>{
    console.log(parametros);
  })
}
  
  //Valida y guarda el formulario


data={ name:'nodr',     
       app:this._us.me.name,
       apm:'b',
       nick:'c' ,
       bio:'d',
       lema: 'que sera'};
       
   update(){
     console.log("q show");
      this._pp.crear(
                             this.data.app,
                             this.data.apm,
                             this.data.bio,
                             this.data.lema,
                             this.data.name,
                             this.data.nick)
      .subscribe(()=>{
        
      })
      
   }
  


}
