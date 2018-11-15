import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-publicacion',
  templateUrl: 'publicacion.html',
})
export class PublicacionPage {
formularioPubli:any;
  constructor(public navCtrl: NavController, 
  	public fb: FormBuilder,public navParams: NavParams) {
  this.buildForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicacionPage');
  }
nota:string;
savePubli(){
  console.log("jaja");
	console.log(this.formularioPubli.value);
  console.log(this.nota);
}



  option:any[] = [
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


buildForm() {
  
    this.formularioPubli = this.fb.group({         
      titulo:['',Validators.compose([Validators.required,Validators.minLength(10)])],       
      text: ['',Validators.compose([Validators.required,Validators.minLength(15)])],
      cat:['']
    });
  }


  crear(){
    
  }
}
