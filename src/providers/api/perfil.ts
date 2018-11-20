import { Http,URLSearchParams,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Platform,AlertController} from "ionic-angular";
import { URL } from "../../config/url.servicio";
import { ApiProvider } from './api';


@Injectable()
export class PerfilProvider {

token:string;

  constructor(
              public http: Http,              
              public alert:AlertController,
              private _us:ApiProvider
              ) {
  }
re:[]=[];

   crear(ap:string,am:string,bio:string,lema:string,name:string,nick:string){
    
    let data= new URLSearchParams();
    //Parametros
    //data.append("nick",nick)
    data.append("apellidoP",ap);
    //data.append("name",name);
    data.append("apellidoM",am);
    data.append("biografia",bio);
    data.append("lema",lema);

      //Parametros
  let headers= new Headers();  
  headers.append('Accept','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);

    let url=URL+"me/update";  
console.log("nosequeed");
           return this.http.post(url,data,{headers})
           .map( resp => {

              this.re=resp.json();
            // this.categoria.push(...data.categorias.data);             
             console.log(this.re);             
            })
}



}