import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentistryComponent } from './dentistry.component';

describe('DentistryComponent', () => {
  let component: DentistryComponent;
  let fixture: ComponentFixture<DentistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
