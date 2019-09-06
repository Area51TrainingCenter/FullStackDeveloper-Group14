import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { NuevoAlumnoComponent } from '../nuevo-alumno/nuevo-alumno.component';
import { Deactivate } from '../deactivate';

@Injectable({
  providedIn: 'root'
})
export class DatosNoGuardadosGuard implements CanDeactivate<Deactivate>  {

  canDeactivate(componente: Deactivate) {
    if (!componente.validarDatosSinGuardar()) {
      if (confirm("Hay datos sin guardar. Quiere guardarlos?")) {
        return false
      }
      return true
    }
    return true
  }
}
