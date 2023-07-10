import { MockDataService } from 'src/app/mock/mock-data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  statusError: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private authenService: AuthenticationService,
    private mock: MockDataService
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
        this.authenService.login(form.username, form.password);
      }
  }
}
