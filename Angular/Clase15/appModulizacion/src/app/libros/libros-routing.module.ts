import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router"
import { ListadoComponent } from './listado/listado.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EdicionComponent } from './edicion/edicion.component';

const routes: Routes = [
  {
    path: "libros", children: [
      { path: "", component: ListadoComponent },
      { path: "nuevo", component: NuevoComponent },
      { path: "edicion", component: EdicionComponent }
    ]
  }
]

@NgModule()
export class LibrosRouting { }
