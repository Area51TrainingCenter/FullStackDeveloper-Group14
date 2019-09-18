import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router"
import { LoginComponent } from './nucleo/login/login.component';
import { HomeComponent } from './nucleo/home/home.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "libros", loadChildren: () => import("./libros/libros.module").then(mod => mod.LibrosModule) }
  /* { path: "libros", loadChildren: "./libros/libros.module#LibrosModule" } */
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRouting { }
