import { TestBed } from '@angular/core/testing';

import { DragonpayService } from './dragonpay.service';

describe('DragonpayService', () => {
  let service: DragonpayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DragonpayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
