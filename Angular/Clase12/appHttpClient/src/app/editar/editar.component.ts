import { AlumnoService } from '../alumno.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  _id: string
  grupo: FormGroup

  constructor(private activatedRoute: ActivatedRoute, private alumnoService: AlumnoService) { }

  ngOnInit() {
    this.grupo = new FormGroup({
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

}
