import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalConfirmacionPedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-confirmacion-pedido',
  templateUrl: 'modal-confirmacion-pedido.html',
})
export class ModalConfirmacionPedidoPage {

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalConfirmacionPedidoPage');
  }

  cerrar() {
    this.viewCtrl.dismiss();
  }

}
