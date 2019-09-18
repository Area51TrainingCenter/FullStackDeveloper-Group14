import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reducidor'
})
export class ReducidorPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
