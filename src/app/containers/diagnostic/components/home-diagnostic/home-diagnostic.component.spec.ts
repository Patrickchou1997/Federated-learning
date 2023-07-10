import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDiagnosticComponent } from './home-diagnostic.component';

describe('HomeDiagnosticComponent', () => {
  let component: HomeDiagnosticComponent;
  let fixture: ComponentFixture<HomeDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDiagnosticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
