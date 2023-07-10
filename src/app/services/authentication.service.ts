import { MockDataService } from 'src/app/mock/mock-data.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { UserData } from '../interfaces/user-data';
import { ConnectApiService } from './connect-api.service';
import { UserLogin } from '../interfaces/user-login';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  constructor(
    private router: Router,
    private mock: MockDataService,
    private connect: ConnectApiService
  ) {
    this._isLoggedIn$.next(false);
  }

  isLoggedIn = false;
  subIsLoggedIn = new Subject<boolean>();
  setIsLogedIn(b: boolean) {
    this.isLoggedIn = b;
    this.subIsLoggedIn.next(this.isLoggedIn);
  }
  login(username: string, password: string) {
    this.feedUserLogin(username, password);
  }

  userLogin: UserLogin | any;
  subUserLogin = new Subject<UserLogin>();
  async feedUserLogin(username: string, password: string) {
    return this.connect.login(username, password).subscribe(
      (data) => {
        if (data.stateError) {
          alert(data.message);
        } else {
          this.userLogin = data;
          this.subUserLogin.next(this.userLogin);
          localStorage.setItem('token', data.token);
          localStorage.setItem('roleID', data.roleID);
          localStorage.setItem('userID', data.userID);
          localStorage.setItem('accStatus', data.accStatus);
          this.setIsLogedIn(true);
          this.router.navigateByUrl('/');
        }
      },
      (error) => {
        alert(error);
      },
      () => {}
    );
  }
  logout() {
    this.isLoggedIn = false;
    this.subIsLoggedIn.next(this.isLoggedIn);
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  loginFind(username: string, password: string) {
    let a = this.mock.users.find(
      (x) => x.userName == username && x.password == password
    );
    if (a) {
      localStorage.setItem('firstName', a.firstName);
      localStorage.setItem('lastName', a.lastName);
      localStorage.setItem('email', a.email);
      localStorage.setItem('userName', a.userName);
      localStorage.setItem('userStatus', a.userStatus.toString());
      localStorage.setItem('userRole', a.roleID.toString());
      return true;
    } else {
      return false;
    }
  }
  register(user: UserData) {
    user.userStatus = false;
    this.mock.users.push(user);
    this.router.navigateByUrl('/');
  }
}
