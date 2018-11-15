import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
/**
 * Generated class for the BibliotecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-biblioteca',
  templateUrl: 'biblioteca.html',
})
export class BibliotecaPage {

  constructor(
  			public navCtrl: NavController, 
  			public navParams: NavParams,
  			private platform:Platform,
  			private document:DocumentViewer,
  			private file:File,
  			private transfer:FileTransfer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotecaPage');
  }	

  /*
  openLocalPdf(name:string){
  	const opcion: DocumentViewerOptions={
  		title:'Mi PDF'
  	};
  	this.document.viewDocument('assets/estadia.pdf','aplication/pdf',opcion);
  }*/


  downloadandpdf(){
  	let path=null;
  	if (this.platform.is('ios')) {
  		path=this.file.dataDirectory;
  	}
  	else{
  		path=this.file.dataDirectory;
  	}
  	const transfer=this.transfer.create();

  	transfer.download('http://liceodeadultoslgc.cl/recurpedagogicos/escaladenotas.pdf',path+ 'myfile.pdf')
  		.then(entry => {
  			let url =entry.toURL();
  			this.document.viewDocument(url,'aplication/pdf',{});
  		});

  }



}
