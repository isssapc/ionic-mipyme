import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AgmCoreModule } from '@agm/core';

//components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AnuncioProvider } from '../providers/anuncio/anuncio';

//environment
import { environment } from "../environment/environment";

//firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ModalConfirmacionPedidoPage } from '../pages/modal-confirmacion-pedido/modal-confirmacion-pedido';
import { PedidoProvider } from '../providers/pedido/pedido';
import { RegistroClientesPage } from '../pages/registro-clientes/registro-clientes';
import { ClienteProvider } from '../providers/cliente/cliente';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalConfirmacionPedidoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googlemaps
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalConfirmacionPedidoPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AnuncioProvider,
    PedidoProvider,
    ClienteProvider
    
  ]
})
export class AppModule { }
