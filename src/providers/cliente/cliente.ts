import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the ClienteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteProvider {

  constructor(private db: AngularFirestore) {
    console.log('Hello ClienteProvider Provider');
  }

  createCliente(cliente) {
    let clientes = this.db.collection<any>("clientes");
    return clientes.add(cliente);
  }

}
