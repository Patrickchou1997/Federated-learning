import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserLoginDiagostic } from 'src/app/interfaces/diagostic-interfaces/user-diagostic-interface';
import { ConnectApiDiagosticService } from './connect-api-diagostic.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenDiagosticService {
  constructor(
    private router: Router,
    private connect: ConnectApiDiagosticService
  ) {}

  userLogin: UserLoginDiagostic | any;
  subUserLogin = new Subject<UserLoginDiagostic>();
  async loginDiagostic(username: string, password: string) {
    return this.connect.loginDiagostic(username, password).subscribe(
      (data) => {
        if (data.stateError) {
          alert(data.message);
        } else {
          this.userLogin = data;
          this.subUserLogin.next(this.userLogin);
          localStorage.setItem('token-diagnostic', data.token);
          this.router.navigateByUrl('/diagnostic');
        }
      },
      (error) => {
        alert(error);
      }
    );
  }
}
