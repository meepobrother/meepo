import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
declare const require;
const Base64 = require('js-base64').Base64;
import * as store from 'store';
// import { ApiService } from './api.service';
@Injectable()
export class SysinfoService {
    uniacid: string = store.get('__meepo_uniacid','41');
    acid: string = store.get('__meepo_acid','41');
    siteroot: string = store.get('__meepo_siteroot','https://meepo.com.cn/');

    constructor(){
        
    }
    getUniacid() {
        return this.uniacid;
    }
    getAcid() {
        return this.acid;
    }
    getSiteRoot() {
        return this.siteroot;
    }
}

