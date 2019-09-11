import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "reducidor"
})
export class ReducidorPipe implements PipeTransform {
  /*   transform(value: string, maxCaracteres: number = 50): string {
      return value.substring(0, maxCaracteres)
    } */
  transform(value: string, maxPalabras: number = 50): string {
    return value.split(" ").slice(0, maxPalabras).join(" ")
  }
}
