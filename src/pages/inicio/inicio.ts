import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { LoginPage} from '../login/login';
import {ApiProvider} from  '../../providers/api/api';
import {Storage} from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { URL } from "../../config/url.servicio";

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
}) 
export class InicioPage {
 formularioUsuario: any;
 
  constructor(public navCtrl: NavController, 
              public fb: FormBuilder,
              private _us:ApiProvider,
              private storage:Storage,
              public loadingCtrl: LoadingController)
  {
           this.buildForm();
  }


  reset(){
    let reurl=URL+"password/reset";
    return reurl;
  }
  
    presentLoading() {
    const loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
  irLogin(){
   
   this._us.entrar(this.formularioUsuario.value.email,
                     this.formularioUsuario.value.password)
       .subscribe(()=>{

         if(this._us.activo){
            this.navCtrl.push(TabsPage)            
         }
         else{
           console.log("Valores invalidos");
         }

       })
   }

  irCrearCuenta(){
  this.navCtrl.push(LoginPage)
  }

  irLogin1(){
    this.presentLoading();
    this.navCtrl.push(TabsPage)  
    if (this._us.activo) {
    this.navCtrl.push(TabsPage)  
    }
  }


buildForm() {
  
    this.formularioUsuario = this.fb.group({         
      email:['',Validators.compose([Validators.required,Validators.email])],       
        password: ['',Validators.compose([Validators.required,Validators.minLength(5)])]
       
    });
  }
}
