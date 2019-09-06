import { AutenticacionService } from '../servicios/autenticacion.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  grupo: FormGroup

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
  }

  login() {
    this.autenticacionService.login(this.grupo.value.username, this.grupo.value.password)
  }

}
