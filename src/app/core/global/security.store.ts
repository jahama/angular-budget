import { Store } from '@ab/util/store';
import { Injectable } from '@angular/core';
import { Security } from './models/security.model';

@Injectable({
  providedIn: 'root',
})
export class SecurityStore extends Store<Security> {
  constructor() {
    const initialState: Security = { loggedIn: false };
    super(initialState);
  }

  public setLoggedIn(userId: string, token: string): void {
    const state = this.getState();
    state.loggedIn = true;
    state.token = token;
    state.userId = userId;
    this.setState(state);
  }
  public setLoggedOut(): void {
    const state = this.getState();
    state.loggedIn = false;
    state.userId = '';
    state.token = '';
    this.setState(state);
  }
  public setUnauthorized(): void {
    const state = this.getState();
    state.loggedIn = false;
    state.userId = '';
    state.token = '';
    state.unauthorized = true;
    this.setState(state);
  }
  public getToken(): string | undefined {
    return this.getState().token;
  }
}
