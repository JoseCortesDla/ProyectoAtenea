import { Component } from '@angular/core';
import { NavController, NavParams,Refresher } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForoProvider } from '../../providers/api/foro';
import { ApiProvider } from '../../providers/api/api';
import { PerfilPage } from '../perfil/perfil';
import { PerfilProvider } from '../../providers/api/perfil';
@Component({
  selector: 'page-comentarios',
  templateUrl: 'comentarios.html',
})
export class ComentariosPage {
  preg:any={};
  us:any={};
formularioComen: any;
  constructor(
                public navCtrl: NavController,
                public navParams: NavParams,
                public fb: FormBuilder,
                private _fp:ForoProvider,
                private _us:ApiProvider,
                  private _pp:PerfilProvider) {
         this.buildForm();
         this.preg=this.navParams.get("pregun");
         this.us=this.navParams.get("user");
         this._fp.repuestaspre(this.preg.slug);
         console.log(this.preg);
         console.log(this.us);
         

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

   recargar(refresher:Refresher){
  setTimeout(()=>{
    this._fp.repuestaspre(this.preg.slug);      
    //this._fp.mispres();
    //this._fp.repuestaspre();
    refresher.complete();
  },1500)
}


  perfil(us:string){
    this._pp.infous(us);
    this.navCtrl.push(PerfilPage)
  }

comentario:string
    coment(){
      console.log(this.formularioComen.value);

      this._fp.res(this.preg.id,this.formularioComen.value.text)
      .subscribe(()=>{//tengo que checare esto del data        
        this.navCtrl.pop()        
       })
    }

    buildForm() {
  
    this.formularioComen = this.fb.group({         
      text:['',Validators.compose([Validators.required,Validators.minLength(2)])],       
        
       
    });
  }

}
