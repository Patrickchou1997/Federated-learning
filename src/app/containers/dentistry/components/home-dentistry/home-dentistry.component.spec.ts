import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDentistryComponent } from './home-dentistry.component';

describe('HomeDentistryComponent', () => {
  let component: HomeDentistryComponent;
  let fixture: ComponentFixture<HomeDentistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDentistryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDentistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
