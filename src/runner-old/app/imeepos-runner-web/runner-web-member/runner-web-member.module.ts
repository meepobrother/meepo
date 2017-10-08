import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerWebMemberRoutingModule } from './runner-web-member-routing.module';
import { RunnerWebMemberComponent } from './runner-web-member.component';
import {HIboxModule} from "../../components-web/h-ibox/h-ibox.module";
import {HNavTabsModule} from "../../components-web/h-nav-tabs/h-nav-tabs.module";

@NgModule({
  imports: [
    CommonModule,
    RunnerWebMemberRoutingModule,
    HIboxModule,
    HNavTabsModule
  ],
  declarations: [RunnerWebMemberComponent]
})
export class RunnerWebMemberModule { }
