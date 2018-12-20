import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalasProvider } from '../../providers/api/salas';

@Component({
  selector: 'page-tareas',
  templateUrl: 'tareas.html',
})

export class TareasPage {
formularioPubli:any;

	sala:any=[];
  constructor(public navCtrl: NavController, 
  			 public fb: FormBuilder,
  			 public navParams: NavParams,
  			 private _sp:SalasProvider,
  			 ) {
  	this.sala=this.navParams.get('sala');
  	console.log(this.sala);
  }


  
}