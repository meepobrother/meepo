import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {RunnerUtilService} from "../runner-components/runner-util.service";
import {CoreUtilService} from "../meepo-core/core-util.service";

declare const require;
let store = require('store');

@Injectable()
export class WelcomeGuard implements CanActivate {
  constructor(
    public router: Router,
    public core: CoreUtilService,
    public util: RunnerUtilService
  ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.util.hideFooter()
    if(this.core.m == 'imeepos_runner'){
      if(this.core['do'] == 'detail'){
        let id = this.core['id'];
        // this.router.navigate(['/core/detail',id])
        this.router.navigate(['/',{ outlets: { primary: 'core/detail/'+id,quick:'root/index'} }]);
        return false;
      }
      else if (this.core['do'] == 'im'){
        // this.router.navigate(['/im/index'])
        this.router.navigate(['/',{ outlets: { primary: 'im/index',quick:'root/index'} }]);
        return false;
      }
      else if(this.core['do'] == 'tasks'){
        // this.router.navigate(['/runner/tasks/index'])
      this.router.navigate(['/',{ outlets: { primary: 'core/index',quick:'root/index'} }]);
      
        return false;
      }else if(this.core['do'] == 'map'){
        // this.router.navigate(['/core/map'])
      this.router.navigate(['/',{ outlets: { primary: 'core/map',quick:'root/index'} }]);
      
        return false;
      }else{
        // this.router.navigate(['/core/post'])
      this.router.navigate(['/',{ outlets: { primary: 'core/post',quick:'root/index'} }]);
      
        return false;
      }
    }
    else if(this.core.m == 'imeepos_coach'){
      // this.router.navigate(['/coach/seat'])
      this.router.navigate(['/',{ outlets: {primary: '/coach/seat',quick: 'root/index',setting: 'root/index'} }]);
      return false;
    }else {
      // this.router.navigate(['/core/post'])
      this.router.navigate(['/',{ outlets: { primary: 'core/post',quick:'root/index',setting: 'root/index'} }]);
      return false;
    }
  }
}


//路由设计
/****
 * 
 * 用户只有一层
 * 管理员有quick
 * 
 */