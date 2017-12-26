import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmpresaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-empresa',
  templateUrl: 'empresa.html',
})
export class EmpresaPage {

  empresa: any = {
    nombre: "Empresa Vital A.C.",
    descripcion: "Empresa profesional, con 5 años de trayectoria",
    direcciones: [
      {
        calle: "1ra Norte",
        colonia: "Colonia Centro",
        numero: "423",
        cp: "29000",
        estado: "Tuxtla Gutíerrez",
        telefonos: [
          { numero: "9613216548" },
          { numero: "9613216548" }        
          
        ],
        email: "contacto@vital.com"       

      }
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmpresaPage');
  }

}
