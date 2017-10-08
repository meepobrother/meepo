import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {CoachTeacherService} from "services-components";

@Injectable()
export class CoachTeacherJoinGuard implements CanActivate {
  constructor(
      public teacher: CoachTeacherService,
      public router: Router
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.teacher.detail({}).subscribe(res=>{
      if(res.code == 1){
        this.router.navigate(['/coach/teacher-index']);
        return false;
      }else{
        return true;
      }
    })
    return true;
  }
}
