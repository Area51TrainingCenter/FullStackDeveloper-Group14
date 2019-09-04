import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from "@angular/router";
import { EditarComponent } from './editar/editar.component'
import { ReactiveFormsModule } from '@angular/forms'

const rutas: Routes = [
  {
    path: "alumno", children: [
      { path: "editar/:_id", component: EditarComponent }
    ]
  }

]

@NgModule({
  declarations: [
    AppComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(rutas), ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
