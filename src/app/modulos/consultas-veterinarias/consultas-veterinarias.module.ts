import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasVeterinariasRoutingModule } from './consultas-veterinarias-routing.module';
import { AsignarConsultaVeterinariaComponent } from './asignar-consulta-veterinaria/asignar-consulta-veterinaria.component';


@NgModule({
  declarations: [
    AsignarConsultaVeterinariaComponent
  ],
  imports: [
    CommonModule,
    ConsultasVeterinariasRoutingModule
  ]
})
export class ConsultasVeterinariasModule { }
