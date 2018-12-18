import { Component } from '@angular/core';
import { NavController, NavParams,Refresher } from 'ionic-angular';
import { ComentariosPage } from '../comentarios/comentarios';
import { ForoProvider } from '../../providers/api/foro';
@Component({
  selector: 'page-pc',
  templateUrl: 'pc.html',
})
export class PcPage {

	cate:any={};
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private _fp:ForoProvider) {
 	this.cate=this.navParams.get("cat");   
  this._fp.porcategoria(this.cate.slug);
  }

mutantes:any[] = [
    {
      nombre:"Luis",
      poder: "Hola "
    },
    {
      nombre: "Wolverine",
      poder: " como estan"
    },
    {
      nombre: "Profesor X",
      poder: "Hay tarea de mate!!"
    }
  ];

comentario(pregun:any,name:string){
    console.log(name);
    this.navCtrl.push(ComentariosPage,{pregun,name})
  }
 recargar(refresher:Refresher){
  setTimeout(()=>{
  this._fp.porcategoria(this.cate.id);
    refresher.complete();
  },1500)
}
 
}