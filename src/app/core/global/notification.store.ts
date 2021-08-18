import { Notification } from '@ab/global/models/notification.model';
import { Store } from '@ab/util/store';
import { NotificationStatus } from '@ab/util/valueToCSS';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationStore extends Store<Notification> {
  constructor() {
    const initialState: Notification = { caption: 'Starting app', status: 'info' };
    super(initialState);
  }

  public showNotification(caption: string, status: NotificationStatus): void {
    const state: Notification = { caption, status };
    this.setState(state);
  }
}
