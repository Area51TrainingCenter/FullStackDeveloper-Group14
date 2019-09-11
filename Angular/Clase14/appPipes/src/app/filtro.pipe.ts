import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: Array<any>, busqueda: string): any {
    //const busquedaAutor = "Mario"
    const nuevoArreglo = value.filter(item => item.autor.toUpperCase().indexOf(busqueda.toUpperCase()) > -1 || item.titulo.toUpperCase().indexOf(busqueda.toUpperCase()) > -1 || item.sinopsis.toUpperCase().indexOf(busqueda.toUpperCase()) > -1)
    return nuevoArreglo
  }

}
