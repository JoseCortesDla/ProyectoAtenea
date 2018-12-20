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
   
   // this.unirse('chivas');
  }

   crearidea(id:string,ideat:string,status:string){

  let headers= new Headers();  
  headers.append('Accept','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);
    
    let data= new URLSearchParams();
    //Parametros
    data.append("sala_id",id);
    data.append("ideat",ideat);
    data.append("estado",status);

    let url=URL+"salas/idea";

    return this.http.post(url,data,{headers})
           .map( resp=>{
              let res=resp.json();
              console.log(res.message);
              console.log("stado"+res.status);  
              
            });
   
	}
re:any[]=[];
	//unirse a un curso
	unirse(codigo:string){
    console.log(codigo);
  let headers= new Headers();  
  headers.append('Accept','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);
    
    let data= new URLSearchParams();
    //Parametros
    data.append('codigo',codigo);


    let url=URL+"salas/joinsala";

    return this.http.post(url,data,{headers})
           .map( resp => resp.json() )
            .subscribe(
      (data) => { // Success
        console.log(data);
      },
      (error) =>{
        console.error(error);
      }
    )
   
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


   ideassala:any[]=[];
   tareassala:any={};
    miembros:any[]=[];
     test:any[]=[];
     paginfo:number=0;
  idesala(id:number){
        //Parametros
  let promesa= new Promise((resolve,reject)=>{
  let headers= new Headers();  
  headers.append('Accept','application/json');  
  headers.append('Authorization','Bearer '+this._us.token);
    
  let url=URL+"salas/"+id;

    return this.http.get(url,{headers})
           .map( resp => resp.json() )
            .subscribe( data=>{            
             this.ideassala=data.idea;
             this.miembros=data.users;
             this.tareassala=data.tareas;
             this.test=data.tests;
              //this.tareassala.push(...data.tareas);
             console.log(this.ideassala);  
             console.log("tareas"+this.tareassala);
             console.log("miebros"+this.miembros);
             console.log("test"+this.test);
             this.paginfo+=1;
            })
          });
  return promesa;
   }


  }

