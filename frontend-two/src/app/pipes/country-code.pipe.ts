import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryCode',
})
export class CountryCodePipe implements PipeTransform {
  transform(value: number, code: string = 'IND') {
    switch (code) {
      case 'USA':
        return '+1 ' + value;
      case 'SIG':
        return '+65 ' + value;
      case 'AUS':
        return '+32 ' + value;
      default:
        return '+91 ' + value;
    }
  }
}
