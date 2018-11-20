import { Http,URLSearchParams,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Platform,AlertController} from "ionic-angular";
import { URL } from "../../config/url.servicio";


@Injectable()
export class SalasProvider {

token:string;

  constructor(
              public http: Http,              
              public alert:AlertController) {
  }

   crearpublicacion(nick:string,email:string,name:string,password:string,pasco:string){
    
    let data= new URLSearchParams();
    //Parametros
    data.append("nick",nick)
    data.append("email",email);
    data.append("name",name);
    data.append("password",password);
    data.append("password_confirmation",pasco);

    let url=URL+"signup";

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

missalas:any[]=[];
	//unirse a un curso
	salas(){

    //Parametros
  let headers= new Headers();  
  headers.append('Content-Type','application/json');  
  headers.append('Authorization','Bearer '+this.token);
    
  let url=URL+"inscrito";

    return this.http.get(url,{headers})
           .map( resp => resp.json() )
            .subscribe( data=>{            
             this.missalas=data;
              //this.users.push(...data.allpreguntas.data);
             console.log(this.missalas);             
            })

	}

}