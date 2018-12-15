import { Component } from '@angular/core';
import { NavController, NavParams,AlertController,ModalController,Refresher } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';
import { InicioPage } from '../inicio/inicio';
import { CategoriaPage } from './categoria';
import { ApiProvider } from  '../../providers/api/api';
import { PerfilProvider } from  '../../providers/api/perfil';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker,ImagePickerOptions } from '@ionic-native/image-picker';
import { DataInfo } from './data';


@Component({
  selector: 'page-mperfil',
  templateUrl: 'mperfil.html',
})
export class MperfilPage {


	user:any={}; 
  formularioUsuario: any;
  name:string=this._us.me.name;
  app:string=this._us.me.apellidoP;
  apm:string=this._us.me.apellidoM;
  nick:string=this._us.me.nick;
  lema:string=this._us.me.lema;
  bio:string=this._us.me.biografia;
  imagepre:string;
  constructor(
    public navCtrl: NavController,    
    //private fb: FormBuilder,
    private _us:ApiProvider,
    private _pp:PerfilProvider,
    private alert:AlertController,
    public navParams:NavParams,
    public md:ModalController,
    private camera:Camera,
    private imagePicker: ImagePicker,
  ) {
    
    this.user=this.navParams.get("pregun");    
  }
/*
    data={          app:this._us.me.apellidoP,
        apm:this._us.me.apellidoM,
        nick:this._us.me.nick,
        bio:this._us.me.biografia,
        lema: this._us.me.lema};
*/

cat(){
  let modal=this.md.create(CategoriaPage);
  modal.present();

  modal.onDidDismiss(parametros=>{
    console.log(parametros);
  })

}
  //carga los datos del perfil  
   update(){     
     console.log(this.name);
      this._pp.crear(
                             this.app,
                             this.apm,
                             this.bio,
                             this.lema,
                             this.name,
                             this.nick)
      .subscribe(()=>{
        this.navCtrl.pop()
        this._us.midatos();
      })      
   }
  
recargar(refresher:Refresher){
  setTimeout(()=>{
    this._us.midatos();  
    refresher.complete();
  },1500)
}

mostrar_camara(){
const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):
 this.imagepre = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
 console.log("errr",JSON.stringify(err));
});
}


seleccionar_foto(){

  let options:ImagePickerOptions={
    quality:70,
    outputType:1,
    maximumImagesCount:1
  }

  this.imagePicker.getPictures(options).then((results) => {
  for (var i = 0; i < results.length; i++) {
     // console.log('Image URI: ' + results[i]);
       this.imagepre = 'data:image/jpeg;base64,' + results[i];
  }
}, (err) => {
console.log("carga",JSON.stringify(err)) });
}
}
