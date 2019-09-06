import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class AutorizacionRolGuard implements CanActivate {
  canActivate() {
    return true
  }
}
