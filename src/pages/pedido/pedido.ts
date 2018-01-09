import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { ModalConfirmacionPedidoPage } from '../modal-confirmacion-pedido/modal-confirmacion-pedido';
import { AnunciosPage } from '../anuncios/anuncios';
//import { AnuncioProvider } from '../../providers/anuncio/anuncio';


@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  pedido: any[] = [];


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    //private anuncioSrv: AnuncioProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
    let paramPedido = this.navParams.get("pedido");
    if (paramPedido) {
      this.pedido = paramPedido;
    }

  }

  disminuirCantidad(producto) {
    if (producto.cantidad == 1) {
      let alert = this.alertCtrl.create({
        title: 'Eliminar Producto',
        subTitle: 'Seguro que quiere eliminar el producto',
        buttons: [
          {
            text: 'Cancelar',
            handler: () => {
              console.log('Cancelar clicked');
            }
          },
          {
            text: 'Aceptar',
            handler: () => {
              console.log('Aceptar clicked');
              let i = this.pedido.indexOf(producto);
              this.pedido.splice(i, 1);
            }
          }
        ]
      });
      alert.present();
    }
    else if (producto.cantidad > 1) {
      producto.cantidad = producto.cantidad - 1;
    }
  }

  aumentarCantidad(producto) {
    producto.cantidad = producto.cantidad + 1;

  }

  cantidadProductos() {
    let cantidad = 0;
    this.pedido.forEach(producto => {
      cantidad = cantidad + producto.cantidad;
    });
    return cantidad;
  }

  totalProductos() {
    let total = 0;
    this.pedido.forEach(producto => {
      total = total + (producto.cantidad * producto.precio);
    });
    return total;
  }

  confirmarPedido() {
    let modal = this.modalCtrl.create(ModalConfirmacionPedidoPage, {
      pedido: this.pedido
    });

/*     modal.onDidDismiss(confirmacion => {

      console.log("confirmacion", confirmacion);


      if (confirmacion) {
        this.pedido = [];
        this.navCtrl.popTo(AnunciosPage,{});
      } else {

      }

    }); */

    modal.present();



  }


  slidingEliminar(producto) {
    console.log("eliminar producto", producto);
    let i = this.pedido.indexOf(producto);
    this.pedido.splice(i, 1);
  }




}
