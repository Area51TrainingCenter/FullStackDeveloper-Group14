import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    const observable: Observable<string> = Observable.create(
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
    )



  }
}
