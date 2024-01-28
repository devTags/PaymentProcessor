import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymayaComponent } from './paymaya.component';

describe('PaymayaComponent', () => {
  let component: PaymayaComponent;
  let fixture: ComponentFixture<PaymayaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymayaComponent]
    });
    fixture = TestBed.createComponent(PaymayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
