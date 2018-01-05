import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnuncioProvider } from '../../providers/anuncio/anuncio';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-anuncios',
  templateUrl: 'anuncios.html',
})
export class AnunciosPage {

  pedido: any[] = [];

  anuncios: any[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private anuncioSrv: AnuncioProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnunciosPage');

    this.anuncioSrv.getAnuncios()
      .subscribe(anuncios => {
        this.anuncios = anuncios;
      });


  }

  gotoPedidoPage() {
    console.log("gotoPagePedidos");

    this.navCtrl.push('PedidoPage', { pedido: this.pedido });
  }

  agregarAlPedido(producto) {

    console.log("agregado al pedido", producto);

    let i = this.pedido.indexOf(producto);
    if (i == -1) {

      producto.cantidad = 1;
      this.pedido.push(producto);
      
    }

  }

}
