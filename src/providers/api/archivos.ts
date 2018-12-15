import { Http,URLSearchParams,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Platform,AlertController} from "ionic-angular";
import { URL } from "../../config/url.servicio";
import { ApiProvider } from './api';

@Injectable()
export class ArchivoProvider {

token:string;

  constructor(
              public http: Http,              
              public alert:AlertController,
              private _us:ApiProvider) {
  }


  archivos:any[]=[];
   archivo(id:number){
             //Parametros
  let headers= new Headers();  
  headers.append('Accept','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);
    
  let url=URL+"salas/"+id+"/archivos";

    return this.http.get(url,{headers})
           .map( resp => resp.json() )
            .subscribe( data=>{            
             this.archivos=data.data;         
              //this.archivos.push(...data.data);
             console.log("archi"+this.archivos);  
             

            })
   }

}