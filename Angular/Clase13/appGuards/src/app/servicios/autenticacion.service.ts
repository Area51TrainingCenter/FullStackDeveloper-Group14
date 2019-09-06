import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private usuarioLogueado: boolean = false

  onCambioEstado: Subject<boolean> = new Subject<boolean>()

  constructor(private router: Router) { }

  /*   get estaLogueado() {
      return this.estaLogueado
    } */

  estaLogueado(): boolean {
    return sessionStorage.getItem("usuarioEstado") ? true : false
  }

  login(username: string, password: string) {
    if (username == "dios" && password == "123") {
      //this.usuarioLogueado = true
      sessionStorage.setItem("usuarioEstado", "true")
      this.router.navigate(["/alumno"])
      this.onCambioEstado.next(true)
    }
  }

  logout() {
    sessionStorage.clear()
    this.router.navigate(["/"])
    //this.usuarioLogueado = false
    this.onCambioEstado.next(false)
  }
}
