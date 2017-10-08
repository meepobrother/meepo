import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { CoreUtilService } from '../../meepo-core/core-util.service';

@Injectable()
export class HomeIndexGuard implements Resolve<any> {
  grids: any[] = []
  constructor(
    public core: CoreUtilService
  ){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return {
      grids: this.initGrids(),
      info: this.initMemberInfo()
    }
  }

  initGrids(){
    return Observable.create(r=>{
      this.core.post('setting.get',{code: 'setting.home.grids'}).subscribe(res=>{
        if(res.code == 0){
          r.next(this.grids);
          r.complete();
        }else{
          r.next(res.info);
          r.complete();
        }
      })
    })
  }

  initMemberInfo(){
    return Observable.create(r=>{
      this.core.post('member.info',{}).subscribe(res=>{
        r.next(res.info);
        r.complete();
      })
    })
  }

}
