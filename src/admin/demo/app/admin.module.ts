import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CoreModule } from './core/core.module';

import { AdminHeaderModule } from '@meepo/admin';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AdminComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AdminHeaderModule,
        CoreModule,
        RouterModule.forRoot([], { useHash: true }),
        NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont' })
    ],
    providers: [],
    bootstrap: [AdminComponent]
})
export class AdminModule { }


