import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'page-publicacion-sala',
  templateUrl: 'publicacion-sala.html',
})

export class PublicacionSalaPage {
formularioPubli:any;
  constructor(public navCtrl: NavController, 
  	public fb: FormBuilder,public navParams: NavParams) {
  }
  
}