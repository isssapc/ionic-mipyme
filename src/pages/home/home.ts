import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  anuncios: any[] = [
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
  ];

  constructor(public navCtrl: NavController) {

  }

}
