import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TabsPage} from '../tabs/tabs';
import { InicioPage} from '../inicio/inicio';
import {ApiProvider} from  '../../providers/api/api';

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
    private alert:AlertController,
    public navParams:NavParams
  ) {
    this.buildForm();
    this.user=this.navParams.get("pregun");
    console.log(this.me);
  }


me:any[] = [
    {
      nombre:"Luis",
      app:"",
      apm:"",
      nick: "H ",
      lema:"",
      bio:""
}
  ];
  //Valida y guarda el formulario
  saveData(){
   // console.log(this.formularioUsuario.value);    
           /*console.log( this.formularioUsuario.value.email);
                     console.log(this.formularioUsuario.value.nick);
                     console.log(this.formularioUsuario.value.password);
                     console.log(this.formularioUsuario.value.passwordConfirmation);*/
    //this.navCtrl.push(TabsPage)
    if (this.formularioUsuario.value.password!=this.formularioUsuario.value.passwordConfirmation) {
        this.alert.create({
          title:"La contraseña no coincide",
          buttons:["ok"]
        }).present();
      }
    //Servicio para crear una cuenta
       this._us.crear(
                     this.formularioUsuario.value.name,
                     this.formularioUsuario.value.email,
                     this.formularioUsuario.value.nick,
                     this.formularioUsuario.value.password,
                     this.formularioUsuario.value.passwordConfirmation)
       .subscribe(()=>{
         if(this._us.activo){
            this.navCtrl.push(InicioPage)            
         }       
       })

  }

  

buildForm() {
  
    this.formularioUsuario = this.fb.group({   
      name:['',Validators.compose([Validators.required,Validators.minLength(5)])] ,
      app:['',Validators.compose([Validators.required,Validators.minLength(5)])] ,
      apm:['',Validators.compose([Validators.required,Validators.minLength(5)])] ,
      nick:['',Validators.compose([Validators.required,Validators.minLength(5)])] ,
      email:['',Validators.compose([Validators.required,Validators.email])],       
      password: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
       
       
    });
  }


}
