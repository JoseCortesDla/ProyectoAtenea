import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { EmailComposer } from '@ionic-native/email-composer';
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
        CategoriaPage,
        PcPage,
        LoginPage} from '../pages/index.paginas';

//Provedores de servicios
import {  ApiProvider, 
          ArchivoProvider,
          PerfilProvider,
          PublicacionesProvider,
          SalasProvider,
          ForoProvider } from '../providers/index.provedores';
import { HttpModule } from '@angular/http';
//pipes
import { PipesModule } from '../pipes/pipes.module';

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
    CategoriaPage,
    PcPage,
    PerfilPage,
AcercaPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    PipesModule,
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
    AcercaPage,
    PcPage,
    CategoriaPage
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
    EmailComposer,
  
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    FileTransfer,
    DocumentViewer
  ]
})
export class AppModule {}
