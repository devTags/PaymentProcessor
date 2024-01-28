import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcashComponent } from './gcash.component';

describe('GcashComponent', () => {
  let component: GcashComponent;
  let fixture: ComponentFixture<GcashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GcashComponent]
    });
    fixture = TestBed.createComponent(GcashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
