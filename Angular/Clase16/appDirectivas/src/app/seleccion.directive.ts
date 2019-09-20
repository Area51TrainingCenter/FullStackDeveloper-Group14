import { Directive, HostListener, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appSeleccion]'
})
export class SeleccionDirective {

  @Output() onArrastrando = new EventEmitter()
  @Output() onSeleccion = new EventEmitter()

  constructor() { }

  @HostListener("dragover", ["$event"]) inicio($event) {
    $event.preventDefault()
    this.onArrastrando.emit(true)
  }

  @HostListener("dragleave", ["$event"]) salir($event) {
    $event.preventDefault()
    this.onArrastrando.emit(false)
  }

  @HostListener("drop", ["$event"]) seleccionar($event) {
    $event.preventDefault()
    this.onSeleccion.emit($event.dataTransfer.files)
    this.onArrastrando.emit(false)
  }

}
