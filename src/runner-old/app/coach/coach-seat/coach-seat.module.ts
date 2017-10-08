import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachSeatRoutingModule } from './coach-seat-routing.module';
import { CoachSeatComponent } from './coach-seat.component';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {CoachSeatService} from "services-components";
import {CoachListModule} from "../coach-list/coach-list.module";
import {DaysNavsModule} from "../../runner-components/days-navs/days-navs.module";
import {MobileVerityModule} from "../../runner-components/mobile-verity/mobile-verity.module";
import {CoachLogService} from "services-components/src/app/coach-services/coach-log.service";
import {FormsModule} from "@angular/forms";
import {FeedTabModule} from "../../runner-components/feed-tab/feed-tab.module";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    CoachSeatRoutingModule,
    EditBtnModule,
    SwiperDefaultModule,
    FeedTabModule,
    CoachListModule,
    DaysNavsModule,
    MobileVerityModule,
    FormsModule
  ],
  declarations: [CoachSeatComponent],
  providers: [CoachSeatService,CoachLogService]
})
export class CoachSeatModule { }
