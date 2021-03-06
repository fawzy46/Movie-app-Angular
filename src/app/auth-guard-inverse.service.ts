import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardInverseService implements CanActivate{

  constructor(private authservice: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authservice.isAuthentecated().then(
      (authenticated) => {
        if (!authenticated) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      }
    );;
  }
}
