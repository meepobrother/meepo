import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {CoachTeacherService} from "services-components";

@Injectable()
export class CoachIndexGuard implements CanActivate {
  constructor(
      public teacher: CoachTeacherService,
      public router: Router
  ){}
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.teacher.detail({}).subscribe(res=>{
      if(res.code == 1){
        return false;
      }else{
        this.router.navigate(['/coach/teacher-join']);
        return false;
      }
    })
    return true;
  }
}
