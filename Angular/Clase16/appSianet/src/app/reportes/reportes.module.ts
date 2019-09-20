import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { PorcursoComponent } from './porcurso/porcurso.component';
import { PoralumnoComponent } from './poralumno/poralumno.component';

@NgModule({
  declarations: [PorcursoComponent, PoralumnoComponent],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
