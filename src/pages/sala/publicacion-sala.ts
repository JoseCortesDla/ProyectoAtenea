import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalasProvider } from '../../providers/api/salas';

@Component({
  selector: 'page-publicacion-sala',
  templateUrl: 'publicacion-sala.html',
})

export class PublicacionSalaPage {
formularioPubli:any;
sala:any={};
  constructor(public navCtrl: NavController, 
  	public fb: FormBuilder,public navParams: NavParams,
    private _sp:SalasProvider
    ) {
     this.sala=this.navParams.get("sala");
     console.log(navParams);
     console.log(this.sala);
  this.buildForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicacionPage');
  }

savePubli(op:boolean){
  
	console.log(this.formularioPubli.value);
  console.log(op);
  console.log(this.sala.id);
  this._sp.crearidea(this.sala.id,this.formularioPubli.value.text,'op')
  .subscribe(()=>{
        this.navCtrl.pop()    
       })

  
}


buildForm() {
  
    this.formularioPubli = this.fb.group({                     
      text: ['',Validators.compose([Validators.required,Validators.minLength(15)])]
      
    });
  }


  crear(){
    
  }


}
