import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  estado: string = ""
  personas: any[]
  recetas: any[]

  constructor() {
    const promesa = new Promise(
      (resolve, reject) => {

        const xHttp: XMLHttpRequest = new XMLHttpRequest()

        xHttp.onreadystatechange = function () {
          if (xHttp.status == 200 && xHttp.readyState == 4) {
            //console.log(xHttp.responseText)
            resolve(JSON.parse(xHttp.responseText))
          } else if (xHttp.status == 404) {
            reject(xHttp.statusText)
          }
        }

        xHttp.open("get", "http://clase.tibajodemanda.com/alumno")
        xHttp.send()

      }
    )


    promesa
      .then(
        (data: any) => {
          console.log("Lista de alumnos")
          console.table(data.results)

          const promesaReceta = new Promise(
            (resolve, reject) => {

              const xHttp: XMLHttpRequest = new XMLHttpRequest()

              xHttp.onreadystatechange = function () {
                if (xHttp.status == 200 && xHttp.readyState == 4) {
                  resolve(JSON.parse(xHttp.responseText))
                } else if (xHttp.status == 404) {
                  reject(xHttp.statusText)
                }
              }

              xHttp.open("get", "http://clase.tibajodemanda.com/receta")
              xHttp.send()
            }
          )

          return promesaReceta

          /*           promesaReceta
                      .then(data => console.log(data))
                      .catch(error => console.log(error)) */
        }
      )
      .then(
        (data: any) => {
          console.log("Lista de recetas")
          console.table(data.results)
        }
      )
      .catch(error => console.log(error))


  }
}
