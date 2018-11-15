import { Component } from '@angular/core';
import { NavController,AlertController,ToastController } from 'ionic-angular';
import { SalasPage  } from '../salas/salas';
import { ForoPage } from '../foro/foro';
import { HomePage } from '../home/home';
import { BibliotecaPage } from '../biblioteca/biblioteca';
import {InicioPage} from '../inicio/inicio';
import {ApiProvider} from  '../../providers/api/api';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SalasPage;
  tab3Root = ForoPage;
  //tab4Root = NotificationPage;
  tab5Root = BibliotecaPage;

  constructor(private _us:ApiProvider,
  				private navCtrl:NavController) {   

/*     this._us.cargar_storage();
       if (!this._us.activo()) {
    this.navCtrl.push(InicioPage)  
  */  
//this._us.pruebaGet();

  }
}

