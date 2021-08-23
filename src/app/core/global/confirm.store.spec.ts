import { TestBed } from '@angular/core/testing';
import { ConfirmStoreService } from './confirm.store';

describe('ConfirmStoreService', () => {
  let service: ConfirmStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
