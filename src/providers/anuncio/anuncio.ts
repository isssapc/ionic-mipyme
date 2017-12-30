import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Injectable()
export class AnuncioProvider {

  constructor(private db: AngularFirestore) {
    console.log('Hello AnuncioProvider Provider');
  }

  getAnuncios() {
    let anuncios = this.db.collection<any>("anuncios");
    return anuncios.valueChanges();
  }

}
