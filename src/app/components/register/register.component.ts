import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedDatasService } from 'src/app/services/feed-datas.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;
  statusError: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private feed: FeedDatasService,
    private zone: NgZone
  ) {
    this.formRegister = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.email],
      organizationID: ['', Validators.required],
      roleID: ['', Validators.required],
    });
  }
  roles = this.feed.roles;
  anyRoles: any;
  organizations = this.feed.organizations;
  anyOrganizations: any;

  ngOnDestroy(): void {
    this.anyRoles.unsubscribe();
  }

  ngOnInit(): void {
    this.feed.feedRoles();
    this.feed.feedOrganizations();

    this.anyRoles = this.feed.subRoles.subscribe((data) => {
      this.zone.run(() => {
        this.roles = data;
      });
    });
    this.anyOrganizations = this.feed.subOrganizations.subscribe((data) => {
      this.zone.run(() => {
        this.organizations = data;
      });
    });
  }

  onSubmit() {
    let form = this.formRegister.value;
    if (
      form.username &&
      form.password &&
      form.firstname &&
      form.lastname &&
      form.email &&
      form.organizationID &&
      form.roleID
    ) {
      this.feed.feedUserRegister(
        form.firstname,
        form.lastname,
        form.username,
        form.password,
        form.email,
        form.roleID,
        form.organizationID
      );
    }
  }
}
