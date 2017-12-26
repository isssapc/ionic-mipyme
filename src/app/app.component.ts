import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { EmpresaPage } from '../pages/empresa/empresa';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') myNav: NavController;

  rootPage: any = HomePage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
   // private navCtrl: NavController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  openPage(page) {
    this.myNav.setRoot(page);
    console.log("OpenPage");


  }

}

