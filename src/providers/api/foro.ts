import { Http,URLSearchParams,Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Platform,AlertController,ToastController} from "ionic-angular";
import { URL } from "../../config/url.servicio";
import { ApiProvider } from './api';


@Injectable()
export class ForoProvider {

token:string;

  constructor(
              public http: Http,              
              public alert:AlertController,
              private _us:ApiProvider,
              private toastCtrl: ToastController
              ) {
    
    this.categorias();
    this.mispre();
  }


   crearpregunta(titulo:string,text:string,nota:string){
     console.log(nota);
     let headers= new Headers();  
  headers.append('Accept','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);   
    let data= new URLSearchParams();
    //Parametros
    data.append("titulo",titulo);
    data.append("descripcion",text);    
    data.append("categoria_id",nota);

    let url=URL+"foro";

    return this.http.post(url,data,{headers})
           .map( resp=>{
              let res=resp.json();
              console.log(res); 
              this.presentToast('1');            
            });
   
}

presentToast(op:number) {

  let ms;
  (op==1)?ms="Publicando":"idea publicada";
     
   
  let toast = this.toastCtrl.create({
    message: ms,
    duration: 3000,
    position: 'top'
  });
    toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });
 toast.present();
}

categoria:any[]=[];
catefa:any[]=[];
cafa:any[]=[];
categorias(){
  let headers= new Headers();  
  headers.append('Content-Type','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);

let url=URL+"categorias";

return this.http.get(url,{headers})
           .map( resp => resp.json() )
            .subscribe( data=>{    
              this.categoria=data.categorias;              
              this.catefa=data.catfavs;
            // this.categoria.push(...data.categorias.data);             

            for (var i = this.categoria.length - 1; i >= 0; i--) {
                 for (var i = this.catefa.length - 1; i >= 0; i--) {
                   if (this.categoria[i].id==this.catefa[i]) {
                     this.cafa.push(this.categoria[i].nombre);
                   }
                 }
            }
             console.log(this.cafa);             
            })
}
   
preguntas:any[]=[];
allpre(){     
    //Parametros
  let headers= new Headers();  
  headers.append('Content-Type','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);
    
  let url=URL+"allpreguntas";

    return this.http.get(url,{headers})
           .map( resp => resp.json() )
            .subscribe( data=>{             
            this.preguntas.push(...data.allpreguntas.data);           
             console.log(this.preguntas);             
            })
}

mspreguntas:any[]=[];
mispe(){     
    //Parametros
  let headers= new Headers();  
  headers.append('Content-type','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);
    
  let url=URL+"mspreguntas";

    return this.http.get(url,{headers})
           .map( resp => resp.json() )
            .subscribe( data=>{            
             //this.mspreguntas=data.data.data;
            this.mspreguntas.push(...data.data);
            
             console.log("noooo"+this.mspreguntas);             
            })
} 
   
   mispre(){     
    //Parametros
  let headers= new Headers();  
  headers.append('Accept','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);
    
  let url=URL+"mspreguntas";

    return this.http.get(url,{headers})
           .map( resp => resp.json() )
            .subscribe( data=>{             
            this.mspreguntas.push(...data.data.data);           
             console.log(this.mspreguntas);             
            })
}
   repregunta:any[]=[];
repuestaspre(slug:string){
     
    //Parametros
  let headers= new Headers();  
  headers.append('Content-Type','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);
    
   let url=URL+"foro/"+slug;

    return this.http.get(url,{headers})
           .map( resp => resp.json() )
            .subscribe( data=>{            
             this.repregunta=data.respuestas;
              //this.users.push(...data.allpreguntas.data);
             console.log(this.repregunta);             
            })

}


res(id:string,re:string){
     console.log("qq"+re);
     let headers= new Headers();  
  headers.append('Accept','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);   
    let data= new URLSearchParams();
    //Parametros
    data.append("pregunta_id",id);
    data.append("respuesta",re);


    let url=URL+"forores";
console.log(url);
    return this.http.post(url,data,{headers})
            .map( resp=>{
              let res=resp.json();
              console.log("jajajajaj"+res);          
            });
   
}




}