import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImeeposRunnerWebRoutingModule } from './imeepos-runner-web-routing.module';
import { RunnerWebRouterComponent } from './runner-web-router/runner-web-router.component';
import {HNavbarStaticSideModule} from "../components-web/h-navbar-static-side/h-navbar-static-side.module";

@NgModule({
  imports: [
    CommonModule,
    ImeeposRunnerWebRoutingModule,
    HNavbarStaticSideModule
  ],
  declarations: [RunnerWebRouterComponent]
})
export class ImeeposRunnerWebModule { }
