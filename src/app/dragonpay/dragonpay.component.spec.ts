import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonpayComponent } from './dragonpay.component';

describe('DragonpayComponent', () => {
  let component: DragonpayComponent;
  let fixture: ComponentFixture<DragonpayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DragonpayComponent]
    });
    fixture = TestBed.createComponent(DragonpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
