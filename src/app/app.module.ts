import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';

import {SalaPage,
        SalasPage,
        ForoPage,
        HomePage,
        BibliotecaPage,
        InicioPage,
        TabsPage,
        ComentariosPage,
        PublicacionSalaPage,
        MenuperfilPage,
        PerfilPage,
        PublicacionPage,
        MperfilPage,
        AcercaPage,
        LoginPage} from '../pages/index.paginas';

//Provedores de servicios
import {  ApiProvider, 
          ArchivoProvider,
          PerfilProvider,
          PublicacionesProvider,
          SalasProvider,
          ForoProvider } from '../providers/index.provedores';
import { HttpModule } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
@NgModule({
  declarations: [
    MyApp,
    SalaPage,
    SalasPage,
    ForoPage,
    HomePage,
    BibliotecaPage,
    InicioPage,
    TabsPage,
    ComentariosPage,
    MperfilPage,
    PublicacionSalaPage,
    MenuperfilPage,
    LoginPage,
    PublicacionPage,
    PerfilPage,
AcercaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SalaPage,
    SalasPage,
    ForoPage,
    HomePage,
    BibliotecaPage,
    InicioPage,
    TabsPage,
    ComentariosPage,
    PublicacionSalaPage,
    MenuperfilPage,  
    PerfilPage,
    PublicacionPage,
    LoginPage,
    MperfilPage,
    AcercaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiProvider, 
    ArchivoProvider,
    PerfilProvider,
    PublicacionesProvider,
    SalasProvider,
    ForoProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    FileTransfer,
    DocumentViewer
  ]
})
export class AppModule {}
