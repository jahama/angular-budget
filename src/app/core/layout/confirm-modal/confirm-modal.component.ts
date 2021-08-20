import { Confirm, ConfirmStore } from '@ab/global/confirm.store';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'ab-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmModalComponent {
  public confirm$: Observable<Confirm>;

  constructor(private store: ConfirmStore) {
    this.confirm$ = store.getState$();
  }

  public onConfirmClick(): void {
    this.store.confirm();
  }
  public onCancelClick(): void {
    this.store.cancel();
  }
}
