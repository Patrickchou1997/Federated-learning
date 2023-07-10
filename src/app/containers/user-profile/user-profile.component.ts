import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ControllerComponentsService } from 'src/app/services/controller-components.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  constructor(
    private control: ControllerComponentsService,
    private authenService: AuthenticationService
  ) {}
  userStatus: boolean = false;
  ngOnInit(): void {
    this.control.onChangeItem(0);
    let s = localStorage.getItem('accStatus');
    if (s == 'A') {
      this.userStatus = true;
    } else {
      this.userStatus = false;
    }
  }
  logout() {
    this.authenService.logout();
  }
}
