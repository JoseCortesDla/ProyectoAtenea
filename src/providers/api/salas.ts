import { Http,URLSearchParams,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Platform,AlertController} from "ionic-angular";
import { URL } from "../../config/url.servicio";
import { ApiProvider } from '../../providers/api/api';


@Injectable()
export class SalasProvider {

token:string;

  constructor(
              public http: Http,              
              public alert:AlertController,
              private _us:ApiProvider) {
  }

   crearidea(id:string,titulo:string,ideat:string,status:string){

      let headers= new Headers();  
  headers.append('Accept','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);
    
    let data= new URLSearchParams();
    //Parametros
    data.append("sala_id",id);
    data.append("descripcion",ideat);
    data.append("titulo",status);

    let url=URL+"salas";

    return this.http.post(url,data,{headers})
           .map( resp=>{
              let res=resp.json();
              console.log(res);              
            });
   
	}


	//unirse a un curso
	unirse(cod:string){

 let headers= new Headers();  
  headers.append('Accept','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);
    
    let data= new URLSearchParams();
    //Parametros
    data.append("codigo",id);

    let url=URL+"joinsala";

    return this.http.post(url,data,{headers})
           .map( resp=>{
              let res=resp.json();
              console.log(res);              
            });
	}


missalas:any[]=[];
  
  inscrito(){
        //Parametros
  let headers= new Headers();  
  headers.append('Accept','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);
    
  let url=URL+"inscrito";

    return this.http.get(url,{headers})
           .map( resp => resp.json() )
            .subscribe( data=>{            
             this.missalas=data.insalas;
              //this.users.push(...data.allpreguntas.data);
             console.log(this.missalas);             
            })

   }
  }

