import { Store } from '@ab/util/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type ConfirmStatus = 'confirmed' | 'canceled' | 'pending';

export interface Confirm {
  title: string;
  message: string;
  confirm?: string;
  cancel?: string;
  status: ConfirmStatus;
  show: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ConfirmStore extends Store<Confirm> {
  public status$: Observable<ConfirmStatus>;

  constructor() {
    const initialState: Confirm = {
      title: 'Confirm',
      message: 'info',
      confirm: 'Go ahead',
      cancel: 'Never mind',
      status: 'pending',
      show: false,
    };
    super(initialState);
    this.status$ = this.select$(state => state.status);
  }

  showModal(confirm: Partial<Confirm>): void {
    const state = { ...this.getState(), ...confirm };
    state.status = 'pending';
    state.show = true;
    this.setState(state);
  }
  confirm(): void {
    const state = this.getState();
    state.status = 'confirmed';
    state.show = false;
    this.setState(state);
  }
  cancel(): void {
    const state = this.getState();
    state.status = 'canceled';
    state.show = false;
    this.setState(state);
  }
}
