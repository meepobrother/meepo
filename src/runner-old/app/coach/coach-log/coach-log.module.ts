import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachLogRoutingModule } from './coach-log-routing.module';
import { CoachLogComponent } from './coach-log.component';
import {CoachLogService} from "services-components/src/app/coach-services/coach-log.service";
import {TopNavModule} from "../../runner-components/top-nav/top-nav.module";

@NgModule({
  imports: [
    CommonModule,
    CoachLogRoutingModule,
      TopNavModule
  ],
  declarations: [CoachLogComponent],
  providers: [CoachLogService]
})
export class CoachLogModule { }
