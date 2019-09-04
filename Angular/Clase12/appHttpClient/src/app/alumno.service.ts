import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators'
import { Alumno } from './alumno';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>("http://clase.tibajodemanda.com/alumno").pipe(pluck("results"))
  }

  detallar() { }

  insertar() { }

  modificar() { }

  eliminar() { }
}
