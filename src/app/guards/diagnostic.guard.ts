import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticGuard implements CanActivate {
  constructor(
    private router: Router,
    // private authenService: AuthenticationService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = localStorage.getItem('token-diagnostic');

      if (!token || this.tokenExpired(token)) {
        // this.authenService.setIsLogedIn(false);
        this.router.navigateByUrl('/diagnostic/login');
      } else {
        // this.authenService.setIsLogedIn(true);
      }
      return true;
    }

    private tokenExpired(token: any) {
      const expiry = JSON.parse(atob(token.split('.')[1])).exp;
      return Math.floor(new Date().getTime() / 1000) >= expiry;
    }
  }
