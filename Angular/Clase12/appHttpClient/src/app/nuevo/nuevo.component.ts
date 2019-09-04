import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  _id: string
  grupo: FormGroup

  constructor(private activatedRoute: ActivatedRoute, private alumnoService: AlumnoService, private router: Router) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      _id: new FormControl(),
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required)
    })
    this._id = this.activatedRoute.snapshot.paramMap.get("_id")
    this.alumnoService.detallar(this._id)
      .subscribe(
        resp => this.grupo.patchValue(resp)
      )
  }

  nuevo() {
    this.alumnoService.insertar(this.grupo.getRawValue())
      .subscribe(resp => {
        this.alumnoService.onActualizar.next()
        this.router.navigate(["/"])
        alert("Alumno actualizado")
      })
  }

  volver() {
    this.router.navigate(["/"])
  }
}
