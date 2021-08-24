import { Store } from './store';

describe('Store', () => {
  it('should create an instance', () => {
    expect(new Store<number>(0)).toBeTruthy();
  });
});
