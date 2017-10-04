import { Observable } from 'rxjs/Observable';

import { Injectable, NgModule, Inject } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS, HttpParams } from '@angular/common/http';
import { SysinfoService } from './sysinfo.service';
// 处理URL
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

    constructor(
        public sysinfo: SysinfoService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // 复制一个请求
        // Clone the request to add the new params.
        const sysinfo: SysinfoService = this.sysinfo;
        const newReq = req.clone({
            url: `${sysinfo.siteroot}${req.url}/index.php`
        });
        // Pass on the cloned request instead of the original request.
        return next.handle(newReq);
    }
}
