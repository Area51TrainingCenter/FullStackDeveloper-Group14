import { AutenticacionService } from './servicios/autenticacion.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logueado: boolean = false

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
    this.logueado = this.autenticacionService.estaLogueado()

    this.autenticacionService.onCambioEstado.subscribe(
      estado => this.logueado = estado
    )
  }

  logout() {
    this.autenticacionService.logout()
  }


}
