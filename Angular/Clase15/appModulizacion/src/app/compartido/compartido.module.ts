import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReducidorPipe } from './reducidor.pipe';

@NgModule({
  declarations: [ReducidorPipe],
  imports: [
    CommonModule
  ],
  exports: [ReducidorPipe]
})
export class CompartidoModule { }
