import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'niceNumber',
})
export class NiceNumberPipe implements PipeTransform {
  transform(value: number): string {
    if (value >= 1000000) return Math.round(value / 100000) / 10 + 'M';
    if (value >= 1000) return Math.round(value / 100) / 10 + 'k';
    return '' + value;
  }
}
