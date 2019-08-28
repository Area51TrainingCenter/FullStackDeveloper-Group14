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

  constructor() {
    const promesa: Promise<any[]> = new Promise(
      (resolve, reject) => {
        console.log("llamada")
        const xHttp: XMLHttpRequest = new XMLHttpRequest()

        xHttp.onreadystatechange = function () {
          if (xHttp.status == 200 && xHttp.readyState == 4) {
            //console.log(xHttp.responseText)
            resolve(JSON.parse(xHttp.responseText).results)
          } else if (xHttp.status == 404) {
            reject(xHttp.statusText)
          }
        }

        xHttp.open("get", "http://clase.tibajodemanda.com/alumno2")
        xHttp.send()

      }
    )

    try {
      this.personas = promesa.then()
    } catch (error) {
      console.error(error)
      this.error = error
    }


  }
}
