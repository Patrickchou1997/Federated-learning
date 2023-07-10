import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDiagnosticComponent } from './login-diagnostic.component';

describe('LoginDiagnosticComponent', () => {
  let component: LoginDiagnosticComponent;
  let fixture: ComponentFixture<LoginDiagnosticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDiagnosticComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
