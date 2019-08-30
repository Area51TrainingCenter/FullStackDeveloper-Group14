import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TiempoComponent } from './tiempo/tiempo.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { RouterModule, Routes } from "@angular/router"

const rutas: Routes = [
  { path: "", component: Componente1Component },
  { path: "c2", component: Componente2Component }
]

@NgModule({
  declarations: [
    AppComponent,
    TiempoComponent,
    Componente1Component,
    Componente2Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
