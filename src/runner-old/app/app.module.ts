import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component} from '@angular/core';

import {AppComponent} from './app.component';

import {RouterModule, Routes } from "@angular/router";

import {EmptyComponent} from "./meepo-core/core-share/empty/empty.component";
import {AssistiveTouchModule} from "./runner-components/assistive-touch/assistive-touch.module";
import {CoreShareModule} from "./meepo-core/core-share/core-share.module";
import {RunnerUtilService} from "./runner-components/runner-util.service";

import {ImModule} from "./im/im.module";

import {OptOtherModule} from "./runner-components/opt-other/opt-other.module";
import {TixianModule} from "./tixian/tixian.module";
import {AdminModule} from "./admin/admin.module";

import { CoreUtilService } from './meepo-core/core-util.service';
import { ActiveModule } from './active/active.module';

// 全局
window['timers'] = [];
window['sources'] = [];
// 路由分布
import { PreviewComponent } from './testing/preview/preview.component';
import { SettingComponent } from './testing/setting/setting.component';
import { QuickComponent } from './testing/quick/quick.component';
import { SliderComponent } from './testing/slider/slider.component';


let routes: Routes =[
  {
    path: '',
    redirectTo: '/welcome/index',
    pathMatch: 'full'
  },
  {
    path: 'root',
    component: PreviewComponent,
    children: []
  },
  {
    path: 'root',
    component: SettingComponent,
    outlet: 'setting',
    children: [
      {
        path: 'index',
        loadChildren: 'app/setting/index/index.module#IndexModule'
      }
    ]
  },
  {
    path: 'root',
    component: QuickComponent,
    outlet: 'quick',
    children: [
      {
        path: 'index',
        loadChildren: 'app/quick/quick-common#QuickCommonModule'
      }
    ]
  },
  {
    path: 'root',
    component: SliderComponent,
    outlet: 'slider',
    children: []
  },
  {
    path: '**',
    component: EmptyComponent
  }
];

// redux 全局数据控制
import { AppStoreModule } from './redux';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmptyComponent,
    PreviewComponent,
    SettingComponent,
    QuickComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    }),
    CoreShareModule,
    ImModule,
    OptOtherModule,
    AssistiveTouchModule,
    TixianModule,
    AdminModule,
    ActiveModule,
    AppStoreModule,
    FormsModule
  ],
  providers: [RunnerUtilService,CoreUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
