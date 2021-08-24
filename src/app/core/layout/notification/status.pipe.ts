import {
  getClassForNotificationStatus,
  NotificationStatus,
  StatusClass,
} from '@ab/util/valueToCSS';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
})
export class StatusPipe implements PipeTransform {
  transform(value: NotificationStatus, ...args: unknown[]): StatusClass {
    return getClassForNotificationStatus(value);
  }
}
