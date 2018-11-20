import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComentariosPage } from '../comentarios/comentarios';

@Component({
  selector: 'page-pc',
  templateUrl: 'pc.html',
})
export class PcPage {

	cat:any={};
  constructor(public navCtrl: NavController, 
              public navParams: NavParams) {
 	this.cat=this.navParams.get("cat");
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

  comentario() {
    this.navCtrl.push(ComentariosPage)
  }

 
}