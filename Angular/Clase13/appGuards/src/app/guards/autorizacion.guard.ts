import { Injectable } from "@angular/core";
import { CanActivateChild } from '@angular/router';

@Injectable({
  providedIn: "root"
})
export class AutorizacionGuard implements CanActivateChild {
  canActivateChild() {
    return true
  }
}
