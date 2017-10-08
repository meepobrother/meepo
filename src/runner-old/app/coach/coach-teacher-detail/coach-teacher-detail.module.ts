import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachTeacherDetailRoutingModule } from './coach-teacher-detail-routing.module';
import { CoachTeacherDetailComponent } from './coach-teacher-detail.component';
import {PayOrderModule} from "../../components-useing/pay-order/pay-order.module";
import {CoachTeacherService, ImLogService} from "services-components";
import {DaysNavsModule} from "../../runner-components/days-navs/days-navs.module";
import {TopNavModule} from "../../runner-components/top-nav/top-nav.module";
import {ImListModule} from "../../im/im-list/im-list.module";
import {CoachListModule} from "../coach-list/coach-list.module";
import {FormsModule} from "@angular/forms";
import {CoachLogService} from "services-components/src/app/coach-services/coach-log.service";
import {MobileVerityModule} from "../../runner-components/mobile-verity/mobile-verity.module";
import {OrderCreateModule} from "../../runner-components/order-create/order-create.module";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    CoachTeacherDetailRoutingModule,
    SwiperDefaultModule,
    PayOrderModule,
    DaysNavsModule,
    TopNavModule,
    ImListModule,
    CoachListModule,
      FormsModule,
      MobileVerityModule,
      OrderCreateModule
  ],
  declarations: [CoachTeacherDetailComponent],
  providers: [CoachTeacherService,ImLogService,CoachLogService]
})
export class CoachTeacherDetailModule { }
