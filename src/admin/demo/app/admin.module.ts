import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminComponent } from './admin.component';
import { PagesModule } from './pages';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
    declarations: [AdminComponent],
    imports: [
        BrowserModule,
        PagesModule,
        RouterModule.forRoot([], { useHash: true }),
        NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont' })
    ],
    providers: [],
    bootstrap: [AdminComponent]
})
export class AdminModule { }


