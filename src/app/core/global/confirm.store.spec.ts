import { TestBed } from '@angular/core/testing';
import { ConfirmStore } from './confirm.store';

describe('ConfirmStoreService', () => {
  let service: ConfirmStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
