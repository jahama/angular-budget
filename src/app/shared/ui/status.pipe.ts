import { getClassForStatus } from '@ab/util/valueToCSS';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return getClassForStatus(value);
  }
}
