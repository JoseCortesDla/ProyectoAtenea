import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'page-comentarios',
  templateUrl: 'comentarios.html',
})
export class ComentariosPage {
formularioComen: any;
  constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public fb: FormBuilder) {
         this.buildForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComentariosPage');
  }
  comen:any[] = [
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
    },  {
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

    coment(value:string){
      console.log(value);
    }
    buildForm() {
  
    this.formularioComen = this.fb.group({         
      text:['',Validators.compose([Validators.required,Validators.minLength(5)])],       
        
       
    });
  }

}
