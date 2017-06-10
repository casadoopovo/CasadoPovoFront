import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
/**
 * Created by Bruno Melo on 10/06/17.
 */
export class AdminGuard {
  isAdmin: boolean = false;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.isAdmin;
  }

  login(): Observable<boolean> {
    return Observable.of(true).do(val => this.isAdmin = true);
  }

  logout(): void {
    this.isAdmin = false;
  }
}
