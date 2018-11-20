import { Http,URLSearchParams,Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Platform,AlertController} from "ionic-angular";
import {Storage} from '@ionic/storage';
import { URL } from "../../config/url.servicio";


@Injectable()
export class ApiProvider {

token:string;

  constructor(private platform:Platform,
              public http: Http,
              public storage:Storage,
              public alert:AlertController) {
              
  }

  //Verifica si la sesion esta activa
  activo():boolean{
   return (this.token)? true:false;
      }
 me:any[]=[];     
midatos(){
     
    //Parametros
  let headers= new Headers();  
  headers.append('Content-Type','application/json');  
  headers.append('Authorization','Bearer '+this.token);
    
  let url=URL+"user";

    return this.http.get(url,{headers})
           .map( resp => resp.json() )
            .subscribe( data=>{            
             this.me=data;
              //this.users.push(...data.allpreguntas.data);
             console.log(this.me);             
            })

}
  //Login
   entrar(correo:string,password:string){
  	let data= new URLSearchParams();

  //concantena los parametros en  la data
  	data.append("email",correo);
  	data.append("password",password);
  	
  	let url=URL+"login";

  	return this.http.post(url,data)
  					.map( resp=>{
  						let res=resp.json();
  						console.log(res);
              if (res.error) {
                this.alert.create({
                  title:"Email y/o invalidos",
                  buttons:["ok"]
                }).present();
              }else{
              this.token=res.access_token;
              //guarda el token
              this.guardar_storage();
             }
  					});

  }
 //Cerrar sesion
  cerrar_sesion(){
    this.token=null;
   this.guardar_storage();
    console.log(this.token);
  }

   //Guarda la sesion cuando inicia
   private guardar_storage(){
      
    if (this.platform.is('cordova')) {
      // dispositivo
      this.storage.set('token', this.token );
    }else{
     if (this.token) {
        localStorage.setItem("token",this.token);
     }
     else{
       localStorage.removeItem("token");
     }
    }
  }


  //Carga la sesion para verificar si esta activo
  cargar_storage(){

    let promesa=new Promise( (resolve,reject) =>{
      if ( this.platform.is("cordova") ){
        // dispositivo
        this.storage.ready()
              .then( ()=>{

                 this.storage.get('token')
                     .then( token =>{
                        if (token) {
                          this.token=token;
                        }                       
                resolve();
              })      
        })
      }else{
          if (localStorage.getItem("token")) {         
            this.token=localStorage.getItem("token" );            
          }
          resolve();
        }
      });
      return promesa;
   }

   //Creacion de nueva cuenta  
   crear(name:string,email:string,nick:string,password:string,pasco:string){
    
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
post:any[]=[];
pruebaGet(){

let url=URL+"house";
let headers= new Headers();

headers.append('Content-Type','application/json');
headers.append('Authorization','Bearer '+this.token);
  this.http.get(url,{headers})
            .map( resp => resp.json() )
            .subscribe( (data: any[])=>{
              
              this.post=data;
             //console.log(this.post);             
            })
        }
po:any[]=[];


//homehomehomehomehome
prueba(){

let url="https://randomuser.me/api/?results=10";

//let url=URL+"mspreguntas";
//let headers= new Headers();

//headers.append('Content-Type','application/json');
//headers.append('Authorization','Bearer '+this.token);

  this.http.get(url)
            .map( resp => resp.json() )
            .subscribe( data => {
              //this.post=data.data;
              //this.post=data.dato;


              this.post.push(...data.results);            
              //this.po.push(...data.dato);data.data quite el .data en el ngfor en el home


             //this.po=data.data;
//             this.po=Array.of(this.po);            

             //this.post=data;
              //console.log(this.po);
              console.log(this.post);
              

            })
        
}
           
}


 /*

   home(correo:string,password:string){
    let data= new URLSearchParams();

    let url='http://3a521fcb.ngrok.io/api/auth/login';

    return this.http.post(url,data)
            .map( resp=>{
              let res=resp.json();
              console.log(res);
              this.token=res.access_token;
              
              this.guardar_storage();


            })

  }
house(){
    let data= new URLSearchParams();

    let url='http://3a521fcb.ngrok.io/api/auth/house';

    return this.http.post(url,'')
            .map( resp=>{
              let res=resp.json();
              console.log(res);
          


            })

  }
*/