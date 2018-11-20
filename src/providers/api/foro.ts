import { Http,URLSearchParams,Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Platform,AlertController} from "ionic-angular";
import { URL } from "../../config/url.servicio";
import { ApiProvider } from './api';


@Injectable()
export class ForoProvider {

token:string;

  constructor(
              public http: Http,              
              public alert:AlertController,
              private _us:ApiProvider
              ) {
    this.allpre();
    this.categorias();
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
            });
   
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
             //this.preguntas=data;
            this.preguntas.push(...data.allpreguntas.data);
            
             console.log(this.preguntas);             
            })
}
   
   repreguntas:any[]=[];
repuestaspre(){
     
    //Parametros
  let headers= new Headers();  
  headers.append('Content-Type','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);
    
  let url=URL+"forores";

    return this.http.get(url,{headers})
           .map( resp => resp.json() )
            .subscribe( data=>{            
             this.repreguntas=data;
              //this.repreguntas.push(...data.allpreguntas.data);
             console.log(this.repreguntas);             
            })
}

res(id:string,res:string){
    
    let data= new URLSearchParams();
    //Parametros
    data.append("respuesta",res);
    //data.append("user_id",this._us.user);
    data.append("pregunta_id",id);
    

    let url=URL+"respuesta";

    return this.http.post(url,data)
           .map( resp=>{

              let res=resp.json();
              console.log(res);
              if (res.status==422) {
                this.alert.create({
                  title:"Datos incorreto",
                  message:"Verifique que los datos sean validos",
                  buttons:["ok"]
                }).present();
              }else{
                 if (res.status==201) {
                this.alert.create({
                  title:"Usuario creado",
                  message:"Verifique su correo para activar su cuenta",
                  buttons:["ok"]
                }).present();
              }
            }
            });
   
}

}