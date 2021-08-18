import { getClassForPendingCount } from '@ab/util/valueToCSS';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pending',
})
export class PendingPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return getClassForPendingCount(value);
  }
}
