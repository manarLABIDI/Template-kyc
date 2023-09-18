import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPmComponent } from './form-pm.component';

describe('FormPmComponent', () => {
  let component: FormPmComponent;
  let fixture: ComponentFixture<FormPmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPmComponent]
    });
    fixture = TestBed.createComponent(FormPmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
