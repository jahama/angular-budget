import { Store } from './store';

fdescribe('Store', () => {
  it('should create an instance', () => {
    expect(new Store<number>(0)).toBeTruthy();
  });
  describe('getState', () => {
    it('should return initial state', () => {
      const input = 0;
      const store = new Store<number>(input);
      const actual = store.getState();
      const expected = 0;
      expect(actual).toBe(expected);
    });
    it('should return current state', () => {
      const initialState = 0;
      const store = new Store<number>(initialState);
      const input = 1;
      store.setState(input);
      const actual = store.getState();
      const expected = 1;
      expect(actual).toBe(expected);
    });
  });
});

fdescribe('GIVEN a string store', () => {
  let stringStore: Store<string>;
  beforeEach(() => {
    const initialState = 'initial';
    stringStore = new Store<string>(initialState);
  });
  describe('WHEN the string is set to a new value', () => {
    beforeEach(() => {
      const input = 'new value';
      stringStore.setState(input);
    });
    it('THEN the new value is returned', () => {
      const actual = stringStore.getState();
      const expected = 'new value';
      expect(actual).toBe(expected);
    });
  });
});

// Beware of the race conditions f
// describe('GIVEN a session store with a value', () => {
//   type Session = { user: string; token: string };
//   let sessionStore: Store<Session>;
//   const input = { user: 'admin', token: '1234567890ABCDEF' };
//   beforeEach(() => {
//     const initialState = { user: '', token: '' };
//     sessionStore = new Store<Session>(initialState);
//     sessionStore.setState(input);
//   });
//   describe('WHEN the value is mutated outside the store', () => {
//     beforeEach(() => {
//       input.token = 'input token mutated value';
//     });
//     it('THEN the original value is returned from the store', () => {
//       const actual = sessionStore.getState();
//       const expected = { user: 'admin', token: '1234567890ABCDEF' };
//       expect(actual).toEqual(expected);
//     });
//   });
//   describe('WHEN the state is mutated outside the store', () => {
//     beforeEach(() => {
//       const state = sessionStore.getState();
//       state.token = 'state token mutated value';
//     });
//     it('THEN the original value is still returned from the store', () => {
//       const actual = sessionStore.getState();
//       const expected = { user: 'admin', token: '1234567890ABCDEF' };
//       expect(actual).toEqual(expected);
//     });
//   });
// });

fdescribe('GIVEN a session store with a value', () => {
  type Session = { user: string; token: string };
  let sessionStore: Store<Session>;
  const initialState = { user: '', token: '' };
  beforeEach(() => {
    sessionStore = new Store<Session>(initialState);
  });
  describe('WHEN the value is mutated outside the store', () => {
    beforeEach(() => {
      const input = { user: 'admin', token: '1234567890ABCDEF' };
      sessionStore.setState(input);
      input.token = 'input token mutated value';
    });
    it('THEN the original value is returned from the store', () => {
      const actual = sessionStore.getState();
      const expected = { user: 'admin', token: '1234567890ABCDEF' };
      expect(actual).toEqual(expected);
    });
  });
  describe('WHEN the state is mutated outside the store', () => {
    beforeEach(() => {
      const input = { user: 'admin', token: '1234567890ABCDEF' };
      sessionStore.setState(input);
      const state = sessionStore.getState();
      state.token = 'state token mutated value';
    });
    it('THEN the original value is still returned from the store', () => {
      const actual = sessionStore.getState();
      const expected = { user: 'admin', token: '1234567890ABCDEF' };
      expect(actual).toEqual(expected);
    });
  });
});
