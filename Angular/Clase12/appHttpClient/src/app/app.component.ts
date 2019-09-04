
import { Component } from '@angular/core';
import { Alumno } from './alumno';
import { AlumnoService } from './alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lista: Alumno[]

  constructor(private alumnoService: AlumnoService, private router: Router) { }

  ngOnInit() {
    this.listar()

    this.alumnoService.onActualizar.subscribe(
      () => this.listar()
    )
  }

  listar() {
    this.alumnoService.listar()
      .subscribe(resp => this.lista = resp)
  }

  editar(_id: string) {
    this.router.navigate(["/alumno", "editar", _id])
  }

  nuevo() {
    this.router.navigate(["/alumno", "nuevo"])
  }

  eliminar(alumno: Alumno) {
    if (!confirm("Está seguro de querer eliminar?")) return false

    this.alumnoService.eliminar(alumno)
      .subscribe(
        () => this.listar()
      )
  }


}
