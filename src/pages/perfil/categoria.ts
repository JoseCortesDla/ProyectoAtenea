import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TabsPage} from '../tabs/tabs';
import { InicioPage} from '../inicio/inicio';
import {ApiProvider} from  '../../providers/api/api';

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

	user:any={};
 
 formularioUsuario: any;

  constructor(
    public navCtrl: NavController,
     private alertCtrl: AlertController,
    private fb: FormBuilder,
    private _us:ApiProvider,
    private alert:AlertController,
    public navParams:NavParams
  )
}