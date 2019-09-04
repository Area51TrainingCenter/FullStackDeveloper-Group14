import { AlumnoService } from '../alumno.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  _id: string
  grupo: FormGroup

  constructor(private activatedRoute: ActivatedRoute, private alumnoService: AlumnoService, private router: Router) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      _id: new FormControl(),
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required)
    })
    //this._id = this.activatedRoute.snapshot.paramMap.get("_id")
    this.activatedRoute.paramMap.subscribe(
      (data: any) => {
        this._id = data.params._id
        this.alumnoService.detallar(this._id)
          .subscribe(
            resp => this.grupo.patchValue(resp)
          )
      }
    )
  }

  actualizar() {
    this.alumnoService.modificar(this.grupo.getRawValue())
      .subscribe(resp => {
        this.alumnoService.onActualizar.next()
        alert("Alumno actualizado")
      })
  }

  volver() {
    this.router.navigate(["/"])
  }

}
