//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class PedidoProvider {

  constructor(private db: AngularFirestore) {
    console.log('Hello PedidoProvider Provider');
  }


  createPedido(pedido) {
    let pedidos = this.db.collection<any>("pedidos");
    return pedidos.add(pedido);
  }

}
