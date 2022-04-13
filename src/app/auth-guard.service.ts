import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authservice: AuthService, private router: Router) { }
   canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authservice.isAuthentecated()
      .then(
        (authenticated) => {
          if (authenticated) {
            return true;
          } else {
            this.router.navigate(['/']);
            return false;
          }
        }
      );
  }
}
