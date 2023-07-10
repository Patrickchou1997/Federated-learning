import { Component, NgZone, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ControllerComponentsService } from 'src/app/services/controller-components.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  constructor(
    private control: ControllerComponentsService,
    private authenService: AuthenticationService,
    private zone: NgZone
  ) {}
  sideBarStatus = this.control.sideBarStatus;

  anySideItemNow: any;
  sideItemNow = this.control.sideItemNow;

  loginStatus: boolean = false;
  userRole: string | any;
  anyLoginStatus: any;

  ngOnDestroy(): void {
    this.anySideItemNow.unsubscribe();
    this.anyLoginStatus.unsubscribe();
  }
  ngOnInit(): void {
    this.anySideItemNow = this.control.subSideItemNow.subscribe((data) => {
      this.zone.run(() => {
        this.sideItemNow = data;
      });
    });
    this.anyLoginStatus = this.authenService.subIsLoggedIn.subscribe((data) => {
      this.zone.run(() => {
        this.loginStatus = data;
        this.userRole = localStorage.getItem('roleID');
      });
    });
  }
  onChange(i: number) {
    this.control.onChangeItem(i);
  }
}
