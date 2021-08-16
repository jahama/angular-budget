import { BehaviorSubject, distinctUntilChanged, map, Observable } from 'rxjs';

function jsonCloner<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

export class Store<T> {
  private _state$: BehaviorSubject<T>;
  /**
   * Creates a new store
   *
   * @param initialState - The initial value for this store
   * @param cloner - optional cloner function
   *
   */
  constructor(initialState: T, private cloner: (state: T) => T = jsonCloner) {
    this._state$ = new BehaviorSubject(this.cloner(initialState));
  }
  /**
   * Gets an observable of the state changes
   * @returns a typed observable
   */
  public getState$(): Observable<T> {
    return this._state$.asObservable().pipe(map(state => this.cloner(state)));
  }
  /**
   * Selects a value calculated from the state, and emits all of its changes
   * @param selector A projection or map function
   * @returns A typed observable with the changes
   */
  select$<K>(selector: (state: T) => K): Observable<K> {
    return this.getState$().pipe(map(selector), distinctUntilChanged());
  }
  /**
   * Gets a snapshot of the current state
   * @returns a clone of the state
   */
  getState(): T {
    return this.cloner(this._state$.value);
  }
  /**
   * Changes the state of the store
   * @returns no return value, use getState$ to get the new state
   */
  public setState(newState: T): void {
    this._state$.next(this.cloner(newState));
  }
}
