import { Notification } from '@ab/global/models/notification.model';
import { NotificationStore } from '@ab/global/notification.store';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable, Subject, tap, timer } from 'rxjs';
@Component({
  selector: 'ab-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationComponent {
  public notification$!: Observable<Notification>;
  public hide$ = new Subject<boolean>();

  constructor(private store: NotificationStore) {
    this.notification$ = this.store.getState$().pipe(tap(() => this.autoClose()));
  }
  public close(): void {
    this.hide$.next(true);
  }

  private autoClose() {
    this.hide$.next(false);
    timer(3000).subscribe(() => {
      this.close();
    });
  }
}
