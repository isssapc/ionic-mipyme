import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnuncioProvider } from '../../providers/anuncio/anuncio';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {
  pedidos: any = [
    {
      producto: "playera polo para caballero",
      precio: "$500.00",
      cantidad: 1
    },
    {
      producto: "zapato casual",
      precio: "$950.00",
      cantidad: 1

    },
    {
      producto: "pantalón mezclilla para caballero",
      precio: "$900.00",
      cantidad: 1

    },
    {
      producto: "playera deportiva",
      precio: "$430.00",
      cantidad: 1

    },
    {
      producto: "playera deportiva",
      precio: "$430.00",
      cantidad: 1

    },
    {
      producto: "playera deportiva",
      precio: "$430.00",
      cantidad: 1

    }
  ]


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private anuncioSrv: AnuncioProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }

  disminuirCantidad(pedido) {
    if (pedido.cantidad > 0) {
      pedido.cantidad = pedido.cantidad - 1
    }
  }

  aumentarCantidad(pedido) {
    pedido.cantidad = pedido.cantidad + 1

  }




}
