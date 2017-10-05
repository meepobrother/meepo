import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SysinfoService } from './sysinfo.service';
declare const require;
const Base64 = require('js-base64').Base64;

@Injectable()
export class ApiService {
    constructor(
        public http: HttpClient,
        public sysinfo: SysinfoService
    ) {
    }

    mget<T>(__do: string = 'index', __module: string = 'imeepos_runner'): Observable<T> {
        const params =
            new HttpParams()
                .set('c', 'entry')
                .set('do', 'open')
                .set('i', this.sysinfo.getUniacid() || '2')
                .set('j', this.sysinfo.getAcid() || '2')
                .set('__do', __do)
                .set('m', __module);
        return this.http.get<T>('app', { params: params });
    }

    mpost<T>(__do: string = 'index', __body: any = {}, __module: string = 'imeepos_runner'): Observable<T> {
        const params =
            new HttpParams()
                .set('c', 'entry')
                .set('do', 'open')
                .set('i', this.sysinfo.getUniacid() || '2')
                .set('j', this.sysinfo.getAcid() || '2')
                .set('__do', __do)
                .set('m', __module);
        const d = JSON.stringify(__body);
        const encrypted = Base64.encode(d);
        return this.http.post<T>('app', { encrypted: encrypted }, { params: params });
    }

    wget<T>(__do: string = 'index', __module: string = 'imeepos_runner'): Observable<T> {
        const params =
            new HttpParams()
                .set('c', 'site')
                .set('a', 'entry')
                .set('do', 'open')
                .set('i', this.sysinfo.getUniacid() || '2')
                .set('j', this.sysinfo.getAcid() || '2')
                .set('__do', __do)
                .set('m', __module);
        return this.http.get<T>('web', { params: params });
    }

    wpost<T>(__do: string = 'index', __body: any = {}, __module: string = 'imeepos_runner'): Observable<T> {
        const params =
            new HttpParams()
                .set('c', 'site')
                .set('a', 'entry')
                .set('do', 'open')
                .set('i', this.sysinfo.getUniacid() || '2')
                .set('j', this.sysinfo.getAcid() || '2')
                .set('__do', __do)
                .set('m', __module);
        const d = JSON.stringify(__body);
        const encrypted = Base64.encode(d);
        return this.http.post<T>('web', { encrypted: encrypted }, { params: params });
    }

    isSqlError(val: string) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return val.indexOf('sql:') >= 0;
        } else {
            return false;
        }
    }
}

