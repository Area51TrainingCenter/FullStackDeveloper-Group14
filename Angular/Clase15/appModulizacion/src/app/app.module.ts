import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouting } from './app-routing.module';
import { NucleoModule } from './nucleo/nucleo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    NucleoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
