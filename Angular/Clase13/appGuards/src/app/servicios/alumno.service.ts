import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { pluck, delay } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http: HttpClient) { }

  listar(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/photos").pipe(delay(4000))
  }

  listarComentarios(): Observable<any> {
    return this.http.get<any>("https://jsonplaceholder.typicode.com/comments").pipe(delay(3000))
  }
}
