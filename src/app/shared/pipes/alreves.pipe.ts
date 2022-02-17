import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alreves'
})
export class AlrevesPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let alreves = '';
    let x = value.length;

    while ( x >= 0) {
      alreves = alreves + value.charAt(x);
      x--;
    }

    return alreves;
  }

}
