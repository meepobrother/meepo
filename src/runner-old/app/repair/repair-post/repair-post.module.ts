import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairPostRoutingModule } from './repair-post-routing.module';
import { RepairPostComponent } from './repair-post.component';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {CarfilesService, CloudService} from "services-components";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";
import {CoachListModule} from "../../coach/coach-list/coach-list.module";

@NgModule({
  imports: [
    CommonModule,
    RepairPostRoutingModule,
    SwiperDefaultModule,
    EditBtnModule,
    CoachListModule
  ],
  declarations: [RepairPostComponent],
  providers: [CloudService,CarfilesService]
})
export class RepairPostModule { }
