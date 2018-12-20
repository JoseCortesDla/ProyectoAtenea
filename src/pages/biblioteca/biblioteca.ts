import { Component } from '@angular/core';
import { NavController, NavParams,Platform } from 'ionic-angular';
import { DocumentViewer,DocumentViewerOptions } from '@ionic-native/document-viewer';
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

  
  openLocalPdf(name:string){
  	const opcion: DocumentViewerOptions={
  		title:'Mi PDF'
  	};
  	this.document.viewDocument('assets/estadia.pdf','aplication/pdf',opcion);
  }


  download(){
    
  	let path=null;
  	if (this.platform.is('ios')) {
  		path=this.file.documentsDirectory;
  	}
  	else{
  		path=this.file.dataDirectory;
  	}

    const transfer=this.transfer.create()
  	const dirurl='http://www.oeidrus-morelos.gob.mx/compendio/files/Jiutepec.pdf';

      transfer.download(dirurl,path+'Jiutepec.pdf').then((entry) => {
    console.log("que pedo pdfjssjsj");
    let url= entry.toURL();
    this.document.viewDocument(url,'aplicacion/pdf',{});
  }, (error) => {
    console.log("que pedo pdf"+dirurl);
  });

  }

}
