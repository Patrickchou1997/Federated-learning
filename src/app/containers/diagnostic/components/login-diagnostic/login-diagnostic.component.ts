import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenDiagosticService } from 'src/app/services/diagostic-services/authen-diagostic.service';

@Component({
  selector: 'app-login-diagnostic',
  templateUrl: './login-diagnostic.component.html',
  styleUrls: ['./login-diagnostic.component.css']
})
export class LoginDiagnosticComponent implements OnInit {
  formLogin: FormGroup;
  statusError: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authenService: AuthenDiagosticService,
  ) {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}
  onSubmit() {
    let form = this.formLogin.value;
    if (form.username)
      if (form.password) {
        this.authenService.loginDiagostic(form.username, form.password);
      }
  }
}
