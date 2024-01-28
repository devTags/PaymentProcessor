import { TestBed } from '@angular/core/testing';

import { GcashService } from './gcash.service';

describe('GcashService', () => {
  let service: GcashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
