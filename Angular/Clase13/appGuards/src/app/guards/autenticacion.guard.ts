import { AutenticacionService } from '../servicios/autenticacion.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable(
  { providedIn: "root" }
)
export class AutenticacionGuard implements CanActivate {
  constructor(private autenticacionService: AutenticacionService, private router: Router) { }

  canActivate() {
    if (!this.autenticacionService.estaLogueado()) {
      this.router.navigate(["no-autenticado"])
      return false
    }
    return true
  }
}
