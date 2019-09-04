import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators'
import { Alumno } from './alumno';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  onActualizar: Subject<any> = new Subject()

  constructor(private http: HttpClient) { }

  listar(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>("http://clase.tibajodemanda.com/alumno").pipe(pluck("results"))
  }

  detallar(_id: string): Observable<Alumno> {
    return this.http.get<Alumno>(`http://clase.tibajodemanda.com/alumno/${_id}`).pipe(pluck("result"))
  }

  insertar(alumno: Alumno): Observable<any> {
    return this.http.post(`http://clase.tibajodemanda.com/alumno`, alumno)
  }

  modificar(alumno: Alumno): Observable<any> {
    return this.http.put(`http://clase.tibajodemanda.com/alumno/${alumno._id}`, alumno)
  }

  eliminar(alumno: Alumno): Observable<any> {
    return this.http.delete(`http://clase.tibajodemanda.com/alumno/${alumno._id}`)
  }
}
