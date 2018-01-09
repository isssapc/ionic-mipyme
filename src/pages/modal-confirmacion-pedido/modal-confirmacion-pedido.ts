import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController, AlertController, App } from 'ionic-angular';
import { PedidoProvider } from '../../providers/pedido/pedido';
import { AnunciosPage } from '../anuncios/anuncios';


@IonicPage()
@Component({
  selector: 'page-modal-confirmacion-pedido',
  templateUrl: 'modal-confirmacion-pedido.html',
})
export class ModalConfirmacionPedidoPage {
  cliente: any = {
    nombre: "Jorge Hernandez",
    email: "jorge@hotmail.com",
    numero: "9612569887",
    direccion: "Calle Retorno 4 #4 Mzn 1 Infonavit Grijalva 1ra Sección"
  };
  pedido: any[];


  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private pedidoSrv: PedidoProvider,
    public alertCtrl: AlertController,
    public appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalConfirmacionPedidoPage');
    this.pedido = this.navParams.get("pedido");
  }

  cerrar() {
    this.viewCtrl.dismiss(false);
  }

  crearPedido() {
    let alert = this.alertCtrl.create({
      title: 'Pedido Realizado',
      subTitle: 'Su pedido ha sido enviado',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.viewCtrl.dismiss();
            this.appCtrl.getRootNav().push(AnunciosPage);

          }
        }
      ]
    });

    let pedido = {
      cliente_nombre: this.cliente.nombre,
      cliente_email: this.cliente.email,
      cliente_numero: this.cliente.numero,
      productos: this.pedido,
    };

    console.log("Pedido OK", pedido);
    this.pedidoSrv.createPedido(pedido).then(() => {
      alert.present();
      this.pedido = [];
    });

  }




}
