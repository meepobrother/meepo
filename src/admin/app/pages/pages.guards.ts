import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../core';
import { Router } from '@angular/router';
@Injectable()
export class IsLoginGuard implements CanActivate {
    constructor(
        public login: LoginService,
        public router: Router
    ){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if(this.login.isLogin){
            return true;
        }else{
            this.router.navigate(['/login'])
        }
    }
}

