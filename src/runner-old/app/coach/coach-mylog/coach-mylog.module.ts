import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachMylogRoutingModule } from './coach-mylog-routing.module';
import { CoachMylogComponent } from './coach-mylog.component';
import {TopNavModule} from "../../runner-components/top-nav/top-nav.module";
import {DaysNavsModule} from "../../runner-components/days-navs/days-navs.module";
import {CoachLogService} from "services-components/src/app/coach-services/coach-log.service";

@NgModule({
  imports: [
    CommonModule,
    CoachMylogRoutingModule,
      TopNavModule,
      DaysNavsModule
  ],
  declarations: [CoachMylogComponent],
  providers: [CoachLogService]
})
export class CoachMylogModule { }
