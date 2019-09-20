import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ListadoComponent } from './listado/listado.component';
import { EdicionComponent } from './edicion/edicion.component';

@NgModule({
  declarations: [ListadoComponent, EdicionComponent],
  imports: [
    CommonModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
