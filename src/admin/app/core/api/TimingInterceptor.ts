import 'rxjs/add/operator/do';
import { HttpRequest, HttpInterceptor, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// 日志服务
export class TimingInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const started = Date.now();
        return next
            .handle(req)
            .do(event => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                    console.log(`请求 ${req.urlWithParams} 花费 ${elapsed} 毫秒.`);
                }
            });
    }
}
