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

  anuncios: any[];/*  [
    {
      titulo: "Pants Deportivos",
      descripcion: "Alta resistencia e ideal para deportes",
      fecha_publicacion: "2018-12-26",
      img_src: "assets/imgs/pants.jpg",
      precio: "$3,000.00",
      categoria: "Promociones",
      avatar_src: "assets/imgs/logo.png"
    },
    {
      titulo: "Short Deportivo",
      descripcion: "ideal para los que practican running",
      fecha_publicacion: "2018-12-26",
      img_src: "assets/imgs/short.jpg",
      precio: "$1,000.00",
      categoria: "Promociones",
      avatar_src: "assets/imgs/logo.png"
    },
    {
      titulo: "Conjunto Deportivo para Dama",
      descripcion: "Bonito conjunto deportivo, unitalla.",
      fecha_publicacion: "2018-12-26",
      img_src: "assets/imgs/conjunto.jpg",
      precio: "$2,000.00",
      categoria: "Promociones",
      avatar_src: "assets/imgs/logo.png"
    }
  ]; */

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
    

    producto.cantidad = 1;

    this.pedido.push(producto);

  }

}
