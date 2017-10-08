import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {CoreUtilService} from "./core-util.service";

@Injectable()
export class CoreMapService {
  key: string = 'DXEBZ-G3IRF-2YFJO-NVYN5-4LSIQ-T4BIY';
  constructor(
      public coreUtil: CoreUtilService
  ) { }

  getDistance(start: any,end: any){
    return Observable.create(obs=>{
      this.coreUtil.post('address.getDistance',{start: start,end: end},'imeepos_runner').subscribe(res=>{
        obs.next(res)
        obs.complete()
      })
    })
  }

}
