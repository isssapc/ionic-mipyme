import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalConfirmacionPedidoPage } from './modal-confirmacion-pedido';

@NgModule({
  declarations: [
    ModalConfirmacionPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalConfirmacionPedidoPage),
  ],
})
export class ModalConfirmacionPedidoPageModule {}
