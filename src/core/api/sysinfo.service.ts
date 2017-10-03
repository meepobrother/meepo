import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
declare const require;
const Base64 = require('js-base64').Base64;

@Injectable()
export class SysinfoService {
    uniacid: string = '2';
    acid: string = '2';
    siteroot: string = 'http://meepo.com.cn/';
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

