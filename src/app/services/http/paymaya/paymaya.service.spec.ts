import { TestBed } from '@angular/core/testing';

import { PaymayaService } from './paymaya.service';

describe('PaymayaService', () => {
  let service: PaymayaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymayaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
