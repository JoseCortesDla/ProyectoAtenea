import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'page-publicacion-sala',
  templateUrl: 'publicacion-sala.html',
})

export class PublicacionSalaPage {
formularioPubli:any;
sala:any={};
  constructor(public navCtrl: NavController, 
  	public fb: FormBuilder,public navParams: NavParams) {
     this.sala=this.navParams.get("sala");
     console.log(navParams);
     console.log(this.sala);
  this.buildForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicacionPage');
  }

savePubli(){
  
	console.log(this.formularioPubli.value);
  console.log(this.sala.nombre);
  console.log(this.op);
 
}

op(p:number){
console.log(p);
}

op1(p:number){
 console.log(p); 
}
buildForm() {
  
    this.formularioPubli = this.fb.group({         
      titulo:['',Validators.compose([Validators.required,Validators.minLength(10)])],       
      text: ['',Validators.compose([Validators.required,Validators.minLength(15)])]      
    });
  }


  crear(){
    
  }
}
