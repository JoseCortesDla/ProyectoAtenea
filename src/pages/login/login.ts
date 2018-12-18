import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TabsPage} from '../tabs/tabs';
import { InicioPage} from '../inicio/inicio';
import {ApiProvider} from  '../../providers/api/api';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

 formularioUsuario: any;

  constructor(
    public navCtrl: NavController,
     private alertCtrl: AlertController,
    private fb: FormBuilder,
    private _us:ApiProvider,
    private alert:AlertController
  ) {
    this.buildForm();
  }

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
      nick:['',Validators.compose([Validators.required,Validators.minLength(5)])] ,
      email:['',Validators.compose([Validators.required,Validators.email])],       
        password: ['',Validators.compose([Validators.required,Validators.minLength(5)])],
        passwordConfirmation: ['',Validators.compose([Validators.required,Validators.minLength(5)])]
       
    });
  }
}
