import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  isLoggedIn = false;
  redirectUrl = "";

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn) { return true; }
    this.redirectUrl = state.url;
    this.router.navigate(['/cblms-home/login']);
    return false;
  }

}