import { Http,URLSearchParams,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Platform,AlertController} from "ionic-angular";
import { URL } from "../../config/url.servicio";


@Injectable()
export class ForoProvider {

token:string;

  constructor(
              public http: Http,              
              public alert:AlertController) {
  }

}