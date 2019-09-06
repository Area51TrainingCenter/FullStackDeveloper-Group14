import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private usuarioLogueado: boolean = false

  constructor() { }

  /*   get estaLogueado() {
      return this.estaLogueado
    } */

  estaLogueado(): boolean {
    return this.usuarioLogueado
  }
}
