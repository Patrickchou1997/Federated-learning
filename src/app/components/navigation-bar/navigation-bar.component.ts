import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { Component, NgZone, OnInit } from '@angular/core';
import { ControllerComponentsService } from 'src/app/services/controller-components.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  constructor(
    private control: ControllerComponentsService,
    private route: Router,
    private authenService: AuthenticationService,
    private zone: NgZone
  ) {}
  sideBarStatus = this.control.sideBarStatus;
  loginStatus: boolean = false;
  anyLoginStatus: any;
  ngOnDestroy(): void {
    this.anyLoginStatus.unsubscribe();
  }
  ngOnInit(): void {

    this.anyLoginStatus = this.authenService.subIsLoggedIn.subscribe((data) => {
      this.zone.run(() => {
        this.loginStatus = data;
      });
    });
  }
  onToggleSideBar() {
    this.control.onToggleSideBar();
  }
  login() {
    this.control.onChangeItem(0);
    this.route.navigateByUrl('/login');
  }
}
