import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UbicacionPage } from './ubicacion';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    UbicacionPage,
  ],
  imports: [
    IonicPageModule.forChild(UbicacionPage),
    AgmCoreModule
  ],
})
export class UbicacionPageModule {}
