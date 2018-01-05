import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { PedidoProvider } from '../../providers/pedido/pedido';


@IonicPage()
@Component({
  selector: 'page-modal-confirmacion-pedido',
  templateUrl: 'modal-confirmacion-pedido.html',
})
export class ModalConfirmacionPedidoPage {
  cliente: any = {
    nombre: "Jorge Hernandez",
    email: "jorge@hotmail.com",
    numero: "9612569887"
  };
  pedido: any[];


  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private pedidoSrv: PedidoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalConfirmacionPedidoPage');
    this.pedido = this.navParams.get("pedido");
  }

  cerrar() {
    this.viewCtrl.dismiss();
  }

  crearPedido() {
    let pedido = {
      cliente_nombre: this.cliente.nombre,
      cliente_email: this.cliente.email,
      cliente_numero: this.cliente.numero,
      productos: this.pedido,
    };
    console.log("Pedido OK", pedido);
    this.pedidoSrv.createPedido(pedido);

  }

}
