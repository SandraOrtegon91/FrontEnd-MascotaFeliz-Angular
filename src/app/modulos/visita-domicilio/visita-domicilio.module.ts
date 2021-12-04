import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisitaDomicilioRoutingModule } from './visita-domicilio-routing.module';
import { AsignarVisitaDomicilioComponent } from './asignar-visita-domicilio/asignar-visita-domicilio.component';


@NgModule({
  declarations: [
    AsignarVisitaDomicilioComponent
  ],
  imports: [
    CommonModule,
    VisitaDomicilioRoutingModule
  ]
})
export class VisitaDomicilioModule { }
