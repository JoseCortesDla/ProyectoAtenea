import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-publicacion-sala',
  templateUrl: 'publicacion-sala.html',
})
export class PublicacionSalaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicacionSalaPage');
  }

}
