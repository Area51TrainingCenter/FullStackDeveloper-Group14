import { Component } from '@angular/core';

FileList.prototype["forEach"] = function (callback) {
  [].forEach.call(this, callback)
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  brown = "brown"
  colorX = "magenta"

  seleccion: boolean = false
  imagenSeleccionada: Array<any> = []

  archivosSeleccionados(imagenes: FileList) {
    imagenes["forEach"](imagen => {
      if (imagen.type.startsWith("image/")) {
        const fr: FileReader = new FileReader()

        fr.onloadend = evento => {
          const dataImagen = (evento.target as FileReader).result
          this.imagenSeleccionada.push(dataImagen)
          //console.log(dataImagen)
        }

        fr.readAsDataURL(imagen)
      }
    })
  }
}
