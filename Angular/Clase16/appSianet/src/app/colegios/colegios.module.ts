import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColegiosRoutingModule } from './colegios-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';

@NgModule({
  declarations: [ListadoComponent, EdicionComponent],
  imports: [
    CommonModule,
    ColegiosRoutingModule
  ]
})
export class ColegiosModule { }
