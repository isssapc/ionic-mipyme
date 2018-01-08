import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { ClienteProvider } from '../../providers/cliente/cliente';

@IonicPage()
@Component({
  selector: 'page-registro-clientes',
  templateUrl: 'registro-clientes.html',
})
export class RegistroClientesPage {

  cliente: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public clienteSrv: ClienteProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroClientesPage');

  }
  cerrar() {
    this.viewCtrl.dismiss();
  }

  crearUsuario() {
    let alert = this.alertCtrl.create({
      title: 'Registro Exitoso',
      subTitle: 'Gracias por su Registo',
      buttons: ['OK']
    });
    alert.present();
    let cliente = {
      nombre: this.cliente.nombre,
      email: this.cliente.email,
      numero: this.cliente.numero,
      password: this.cliente.password,
      direccion: this.cliente.direccion,

    };
    console.log("Registro OK", cliente);
    this.clienteSrv.createCliente(cliente);
  }

}
