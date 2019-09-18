import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './libros/listado/listado.component';
import { LibrosModule } from './libros/libros.module';
import { NuevoComponent } from './libros/nuevo/nuevo.component';
import { EdicionComponent } from './libros/edicion/edicion.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  {
    path: "libros", children: [
      { path: "", component: ListadoComponent },
      { path: "nuevo", component: NuevoComponent },
      { path: "edicion", component: EdicionComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LibrosModule
  ],
  exports: [RouterModule]
})
export class AppRouting { }
