import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForoProvider } from '../../providers/api/foro';
import { ForoPage } from './foro';

@Component({
  selector: 'page-publicacion',
  templateUrl: 'publicacion.html',
})
export class PublicacionPage {
formularioPubli:any;
  constructor(public navCtrl: NavController, 
            	public fb: FormBuilder,
              public navParams: NavParams,
              private _fp:ForoProvider,

              public alert:AlertController) {
  this.buildForm(); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicacionPage');
  }
nota:string='';





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
  //Valida y guarda el formulario
  savePubli(){
 console.log(this.formularioPubli.value.titulo);
 console.log(this.nota);

if (this.nota.length<1) {
   // code...
 this.alert.create({
                  title:"Datos incorreto",
                  message:"Seleccione una categoría",
                  buttons:["ok"]
                }).present();
}

    //Servicio para crear una pregunta
       this._fp.crearpregunta(
                             this.formularioPubli.value.titulo,
                             this.formularioPubli.value.text,
                             this.nota)
       .subscribe(()=>{
        this.navCtrl.push(ForoPage)    
       })

  }


buildForm() {
  
    this.formularioPubli = this.fb.group({         
      titulo:['',Validators.compose([Validators.required,Validators.minLength(10)])],       
      text: ['',Validators.compose([Validators.required,Validators.minLength(15)])]      
    });
  }


  crear(){
    
  }
  res:string

  
}
