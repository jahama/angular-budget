import { Pipe, PipeTransform } from '@angular/core';
import { getClassForStatus } from '../util/status';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return getClassForStatus(value);
  }
}
