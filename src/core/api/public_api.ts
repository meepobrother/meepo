import { Observable } from 'rxjs/Observable';

import { NoopInterceptor } from './NoopInterceptor';
import { TimingInterceptor } from './TimingInterceptor';

import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { SysinfoService } from './sysinfo.service';
import { SiteService } from './site.service';


@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        SysinfoService,
        ApiService,
        SiteService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NoopInterceptor,
            multi: true,
            deps: [
                SysinfoService
            ]
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TimingInterceptor,
            multi: true,
            deps: []
        }
    ]
})
export class ApiModule { }


export * from './api.service';
export * from './sysinfo.service';

