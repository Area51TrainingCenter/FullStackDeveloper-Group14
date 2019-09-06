import { AutenticacionService } from '../servicios/autenticacion.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class AutorizacionRolGuard implements CanActivate {
  constructor(private autenticacionService: AutenticacionService, private router: Router) { }

  canActivate() {
    if (!this.autenticacionService.estaLogueado()) {
      this.router.navigate(["no-autenticado"])
      return false
    }
    return true
  }
}
