import { getClassForCompletedCount } from '@ab/util/valueToCSS';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completed',
})
export class CompletedPipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    return getClassForCompletedCount(value);
  }
}
