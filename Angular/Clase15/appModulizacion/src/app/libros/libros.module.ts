import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EdicionComponent } from './edicion/edicion.component';
import { LibrosRouting } from './libros-routing.module';
import {
  CompartidoModule
} from '../compartido/compartido.module';

@NgModule({
  declarations: [ListadoComponent, NuevoComponent, EdicionComponent],
  imports: [
    CommonModule,
    LibrosRouting,
    CompartidoModule
  ]
})
export class LibrosModule { }
