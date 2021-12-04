import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagoPlanesRoutingModule } from './pago-planes-routing.module';
import { AsignarPagoPlanesComponent } from './asignar-pago-planes/asignar-pago-planes.component';


@NgModule({
  declarations: [
    AsignarPagoPlanesComponent
  ],
  imports: [
    CommonModule,
    PagoPlanesRoutingModule
  ]
})
export class PagoPlanesModule { }
