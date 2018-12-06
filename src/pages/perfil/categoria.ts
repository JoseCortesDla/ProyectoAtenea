import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ViewController,Refresher } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TabsPage} from '../tabs/tabs';
import { InicioPage} from '../inicio/inicio';
import {ApiProvider} from  '../../providers/api/api';
import {ForoProvider} from  '../../providers/api/foro';

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  constructor(
              public navCtrl: NavController,     
              private fb: FormBuilder,
              private _us:ApiProvider,
              private _fp:ForoProvider,
              private view:ViewController,
              public navParams:NavParams
  ){}

	user:any={};
 
  formularioUsuario: any;

  cats:boolean=false;

  
cate:any[]=[];

  enviar(i:number){
    this.cats=true;
    
    console.log(this._fp.categoria[i]);
    
    this.cate.push(this._fp.categoria[i]);
    
   
}
    
    data:any=this.cate;

ca(){  
  console.log(this.cate);
  this.view.onDidDismiss(this.data);
}

recargar(refresher:Refresher){
  setTimeout(()=>{
    this._fp.categorias();  
    refresher.complete();
  },1500)
}
  
}