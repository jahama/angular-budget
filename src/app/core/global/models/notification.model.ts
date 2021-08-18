import { NotificationStatus } from '@ab/util/valueToCSS';

export interface Notification {
  caption: string;
  status: NotificationStatus;
}
