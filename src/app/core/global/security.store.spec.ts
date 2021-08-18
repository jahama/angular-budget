import { TestBed } from '@angular/core/testing';
import { SecurityStore } from './security.store';

describe('SecurityStore', () => {
  let service: SecurityStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
