import { Deactivate } from '../deactivate';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css']
})
export class NuevoAlumnoComponent implements OnInit, Deactivate {

  grupo: FormGroup
  original = { nombres: "", apellidos: "" }
  datosGuardados: boolean = false

  constructor() { }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombres: new FormControl(this.original.nombres),
      apellidos: new FormControl(this.original.apellidos)
    })
  }

  validarDatosSinGuardar() {
    if (this.datosGuardados) return true

    const datosFormulario = this.grupo.getRawValue()

    let iguales = true
    for (let it in datosFormulario) {
      if (datosFormulario[it] != this.original[it]) iguales = false
    }

    return iguales
  }

  guardar() {
    this.datosGuardados = true
  }

}
