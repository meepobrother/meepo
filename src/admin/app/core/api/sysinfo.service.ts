import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
declare const require;
const Base64 = require('js-base64').Base64;
import * as store from 'store';
@Injectable()
export class SysinfoService {
    uniacid: string = store.get('__meepo_uniacid','41');
    acid: string;
    siteroot: string = store.get('__meepo_siteroot','https://meepo.com.cn/');

    static that: any;

    constructor(){
        this.acid = this.uniacid;

    }

    static getSysinfo(){
        SysinfoService.that = SysinfoService.that || new SysinfoService();
        return SysinfoService.that;
    }

    getUniacid() {
        return this.uniacid;
    }
    getAcid() {
        return this.uniacid;
    }

    setUniacid(uniacid: any){
        this.uniacid = uniacid;
    }

    getSiteRoot() {
        return this.siteroot;
    }

    setSiteRoot(siteroot: string){
        this.siteroot = siteroot;
    }
}

