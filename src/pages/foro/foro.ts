import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import {PublicacionPage} from '../publicacion/publicacion';
@Component({
  selector: 'page-foro',
  templateUrl: 'foro.html'
})
export class ForoPage {

  users: any[] = [];

  preguntas:any[]=[
        {
          usuario:"luis",
          pregunta:"hola"
        },
        {
          usuario:"Felipe",
          pregunta:"como estan"
        },{
          usuario:"Maria",
          pregunta:"Hay tarea de mate"
        }
      ];
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

  cat:any[] = [
    {
      nombre:"Mate"
    },
    {
      nombre: "Redes"
    },
    {
      nombre: " Programacion"

    },
    {
      nombre: " Etica"
      
    },
    {
      nombre: "Administración"
      
    }
  ];
  constructor(
    public navCtrl: NavController,
    public userService: ApiProvider,
    private _us:ApiProvider
  ) {     
/*this._us.pruebaGet();
this.preguntas.splice(0);*/
this.preguntas.splice(0);
  }
   ionViewDidLoad(){
     this.preguntas.splice(0);
   }
/*
  ionViewDidLoad(){
    this.userService.getComents()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
        console.log("awebo");
      },
      (error) =>{
        console.error(error);
      }
    )
  }  */
  addpublicacion(){
    this.navCtrl.push(PublicacionPage)
  }
  

}
