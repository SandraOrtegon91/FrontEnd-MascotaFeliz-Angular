import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './clientes/editar-cliente/editar-cliente.component';
import { BuscarClienteComponent } from './clientes/buscar-cliente/buscar-cliente.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { CrearProductoServicioComponent } from './productos-servicios/crear-producto-servicio/crear-producto-servicio.component';
import { BuscarProductoServicioComponent } from './productos-servicios/buscar-producto-servicio/buscar-producto-servicio.component';
import { EditarProductoServicioComponent } from './productos-servicios/editar-producto-servicio/editar-producto-servicio.component';
import { EliminarProductoServicioComponent } from './productos-servicios/eliminar-producto-servicio/eliminar-producto-servicio.component';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { CrearProveedorContratistaComponent } from './proveedor-contratista/crear-proveedor-contratista/crear-proveedor-contratista.component';
import { EditarProveedorContratistaComponent } from './proveedor-contratista/editar-proveedor-contratista/editar-proveedor-contratista.component';
import { BuscarProveedorContratistaComponent } from './proveedor-contratista/buscar-proveedor-contratista/buscar-proveedor-contratista.component';
import { EliminarProveedorContratistaComponent } from './proveedor-contratista/eliminar-proveedor-contratista/eliminar-proveedor-contratista.component';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { CrearAdministradorComponent } from './administrador/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administrador/editar-administrador/editar-administrador.component';
import { BuscarAdministradorComponent } from './administrador/buscar-administrador/buscar-administrador.component';
import { EliminarAdministradorComponent } from './administrador/eliminar-administrador/eliminar-administrador.component';
import { CrearAsesorVeterinarioComponent } from './asesor-veterinario/crear-asesor-veterinario/crear-asesor-veterinario.component';
import { EditarAsesorVeterinarioComponent } from './asesor-veterinario/editar-asesor-veterinario/editar-asesor-veterinario.component';
import { BuscarAsesorVeterinarioComponent } from './asesor-veterinario/buscar-asesor-veterinario/buscar-asesor-veterinario.component';
import { EliminarAsesorVeterinarioComponent } from './asesor-veterinario/eliminar-asesor-veterinario/eliminar-asesor-veterinario.component';


@NgModule({
  declarations: [
    CrearClienteComponent,
    EditarClienteComponent,
    BuscarClienteComponent,
    EliminarClienteComponent,
    CrearProductoServicioComponent,
    BuscarProductoServicioComponent,
    EditarProductoServicioComponent,
    EliminarProductoServicioComponent,
    CrearMascotaComponent,
    EditarMascotaComponent,
    BuscarMascotaComponent,
    EliminarMascotaComponent,
    CrearProveedorContratistaComponent,
    EditarProveedorContratistaComponent,
    BuscarProveedorContratistaComponent,
    EliminarProveedorContratistaComponent,
    CrearPlanComponent,
    EditarPlanComponent,
    BuscarPlanComponent,
    EliminarPlanComponent,
    CrearAdministradorComponent,
    EditarAdministradorComponent,
    BuscarAdministradorComponent,
    EliminarAdministradorComponent,
    CrearAsesorVeterinarioComponent,
    EditarAsesorVeterinarioComponent,
    BuscarAsesorVeterinarioComponent,
    EliminarAsesorVeterinarioComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
