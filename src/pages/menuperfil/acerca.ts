import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { MperfilPage } from '../perfil/mperfil';
import { InicioPage } from '../inicio/inicio';
import {ApiProvider} from  '../../providers/api/api';


@Component({
  selector: 'page-acerca',
  templateUrl: 'acerca.html',
})
export class AcercaPage {

  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              private _us:ApiProvider) {
  }
 
}