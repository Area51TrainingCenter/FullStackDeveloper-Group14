import { AutenticacionService } from '../servicios/autenticacion.service';
import { Injectable } from "@angular/core";
import { CanActivateChild, Router } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AutorizacionGuard implements CanActivateChild {
  constructor(private autenticacionService: AutenticacionService, private router: Router) { }

  canActivateChild() {
    if (!this.autenticacionService.estaLogueado()) {
      this.router.navigate(["no-autenticado"])
      return false
    }
    return true
  }
}
