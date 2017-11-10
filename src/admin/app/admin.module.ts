import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

// 核心主
import { CoreModule } from './core/core.module';
// 页面路由
import { PagesModule } from './pages';

// 功能整理
import { MeepoModule } from './meepo/meepo.module';
// 启动组件
import { AdminComponent } from './admin.component';
// 动画
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// ele么组件库
import { ElModule } from 'element-angular';

@NgModule({
    declarations: [
        AdminComponent
    ],
    imports: [
        CommonModule,
        BrowserModule.withServerTransition({ appId: 'runner-admin' }),
        BrowserAnimationsModule,
        CoreModule,
        RouterModule.forRoot([], { useHash: true }),
        PagesModule,
        ElModule.forRoot(),
        MeepoModule
    ],
    providers: [],
    bootstrap: [AdminComponent]
})
export class AdminModule { }


