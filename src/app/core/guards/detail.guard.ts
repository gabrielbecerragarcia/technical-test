import { ShowsService } from './../services/shows/shows.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailGuard implements CanActivate {

  constructor(
    private router: Router,
    private showsService: ShowsService
  ) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (state.url.includes('detail')) {
      if (!this.showsService.isValidId) {
          this.router.navigate(['']).then();

          return false;
      }
    }

    return true;
  }
}
