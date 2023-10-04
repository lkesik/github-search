import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'niceNumber',
})
export class NiceNumberPipe implements PipeTransform {
  transform(value: number): string {
    return '' + value;
  }
}
