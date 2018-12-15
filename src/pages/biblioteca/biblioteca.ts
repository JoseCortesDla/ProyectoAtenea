import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ArchivoProvider  } from '../../providers/api/archivos';
@Component({
  selector: 'page-biblioteca',
  templateUrl: 'biblioteca.html',
})
export class BibliotecaPage {

  sala:any={};
  constructor(
  			public navCtrl: NavController, 
  			public navParams: NavParams,
  			private platform:Platform,
  			private document:DocumentViewer,
  			private file:File,
  			private transfer:FileTransfer,
        private _ap:ArchivoProvider) {
    this.sala=this.navParams.get("sala");    
    this._ap.archivo(this.sala.id);
  }


fileTransfer: FileTransferObject = this.transfer.create();

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
    console.log("entra pdf");
  	//let path=null;
  /*	if (this.platform.is('ios')) {
  		path=this.file.dataDirectory;
  	}
  	else{
  		path=this.file.dataDirectory;
  	}*/
  	const url='http://www.oeidrus-morelos.gob.mx/compendio/files/Jiutepec.pdf';

      this.fileTransfer.download(url, this.file.dataDirectory + 'Jiutepec.pdf').then((entry) => {
    console.log('download complete: ' + entry.toURL());
  }, (error) => {
    console.log("que pedo pdf");
  });

  }

}
