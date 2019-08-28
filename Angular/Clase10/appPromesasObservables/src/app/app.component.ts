import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estado: string = ""
  personas: Promise<any[]>
  recetas: any[]
  error: any

  loguearUsuario(): Promise<any> {
    if (sessionStorage.getItem("usuario")) {
      console.log("no llamada al api rest")
      return Promise.resolve()
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        sessionStorage.setItem("usuario", JSON.stringify({ nombre: "devops" }))
        resolve({ nombre: "devops" })
      }, 3000)
    })
  }

  login() {
    this.loguearUsuario()
      .then(
        data => {
          console.log(data)
        }
      )
  }

}
