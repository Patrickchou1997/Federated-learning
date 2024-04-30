import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDentistryComponent } from './upload-dentistry.component';

describe('UploadDentistryComponent', () => {
  let component: UploadDentistryComponent;
  let fixture: ComponentFixture<UploadDentistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDentistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDentistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
