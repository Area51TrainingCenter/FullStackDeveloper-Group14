import { Component } from '@angular/core';
import { Observable, Observer, interval, of, throwError } from 'rxjs';
import { pluck, delay, map, filter, take, retry, catchError } from "rxjs/operators"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  alumnos: any = []

  ngOnInit() {
    const observable: Observable<any> = Observable.create(
      (observador: Observer<any>) => {

        const xHttp: XMLHttpRequest = new XMLHttpRequest()

        xHttp.onreadystatechange = function () {
          if (xHttp.status == 200 && xHttp.readyState == 4) {
            observador.next(JSON.parse(xHttp.responseText))
          } else if (xHttp.status == 404) {
            observador.error(xHttp.statusText)
          }
        }

        xHttp.open("get", "http://clase.tibajodemanda.com/alumno")
        xHttp.send()
      }
    )

    observable.subscribe(
      data => {
        this.alumnos = data.results
      },
      error => console.error(error)
    )

    observable
      .pipe(
        pluck("results"),
        delay(3000),
        map(dato => {
          const aMayusculas = dato.map(el => {
            el.nombre = el.nombre.toUpperCase()
            el.apellido = el.apellido.toUpperCase()
            return el
          })
          return aMayusculas
        })
      )
      .subscribe(
        data => console.table("resultado", data)
      )

    interval(2000)
      .pipe(
        filter(el => el % 2 == 0),
        map(num => num * 10),
        take(5)
      )
      .subscribe(
        data => console.log("Dato", data)
      )

    of("sergio", "claudia", "sofia", 100)
      .pipe(
        map((el: any) => el.toUpperCase()),
        retry(3),
        catchError(error => throwError("Se cayó el uppercase"))
      )
      .subscribe(
        data => console.log("viene de of", data),
        error => console.log("ERROR", error)
      )


    /*  const observable: Observable<string> = Observable.create(
       (observador: Observer<string>) => {

         setTimeout(() => {
           console.log("primer mensaje")
           observador.next("Llegó el Uber")
         }, 3000)

         setTimeout(() => {
           console.log("segundo mensaje")
           observador.next("Llegó el Beat")
         }, 5000)

         setTimeout(() => {
           console.log("quinto mensaje")
           observador.complete()
         }, 6000)

         setTimeout(() => {
           console.log("cuarto mensaje")
           observador.error("Casa se incendió")
         }, 7000)

         setTimeout(() => {
           console.log("tercer mensaje")
           observador.next("Llegó el Cabify")
         }, 9000)

       }
     )

     setTimeout(() => {
       observable.subscribe(
         data => console.log("Data SA", data),
         error => console.log("Error SA", error),
         () => console.log("Complete SA")
       )
     }, 4000)

     observable.subscribe(
       data => console.log("Data SB", data),
       error => console.log("Error SB", error),
       () => console.log("Complete SB")
     ) */



  }
}
