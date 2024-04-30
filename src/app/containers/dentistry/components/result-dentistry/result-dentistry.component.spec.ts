import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultDentistryComponent } from './result-dentistry.component';

describe('ResultDentistryComponent', () => {
  let component: ResultDentistryComponent;
  let fixture: ComponentFixture<ResultDentistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultDentistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultDentistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
