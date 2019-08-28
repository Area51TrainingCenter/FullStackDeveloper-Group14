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


        /* setTimeout(() => { */
        /* aquí va el código que llama al api rest */
        /* resolve() */
        /*           reject()
                }, 3000) */

      }
    )

    /*     promesa.then(
          (respuesta: any) => {
            this.estado = respuesta.status
            this.personas = respuesta.results
          },
          (error) => { console.log("Promesa no cumplida"); console.log(error) }
        ) */

    /*     promesa.then(
          (respuesta: any) => {
            this.estado = respuesta.status
            this.personas = respuesta.results
          }).catch(
          (error) => { console.log("Promesa no cumplida"); console.log(error) }
        ) */

    /*     promesa.then(
          (respuesta: any) => {
            this.estado = respuesta.status
            this.personas = respuesta.results
          }
        )
        promesa.catch(
          (error) => { console.log("Promesa no cumplida"); console.log(error) }
        ) */

    const promesaReceta = new Promise(
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

        xHttp.open("get", "http://clase.tibajodemanda.com/receta")
        xHttp.send()
      }
    )

    /*     promesaReceta.then(
          (respuesta: any) => {
            this.recetas = respuesta.results
          }
        )
        promesaReceta.catch(
          (error) => { console.log("Promesa no cumplida"); console.log(error) }
        ) */

    Promise.all([promesa, promesaReceta])
      .then((data: any) => {
        this.personas = data[0].results
        this.recetas = data[1].results
      })
      .catch(
        error => console.log(error)
      )

    Promise.race([promesa, promesaReceta])
      .then((data: any) => {
        console.log(data)
      })
      .catch(error => console.log(error))


    promesa
      .then(
        (data: any) => {
          console.log("Lista de alumnos")
          console.table(data.results)
        }
      )


  }
}
