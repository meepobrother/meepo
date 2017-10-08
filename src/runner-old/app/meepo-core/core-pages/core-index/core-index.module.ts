import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreIndexRoutingModule } from './core-index-routing.module';
import {CoreIndexComponent} from "./core-index.component";
import {EditBtnModule} from "../../../runner-components/edit-btn/edit-btn.module";
import {CoreComponentsModule} from "../../core-components/core-components.module";
import {RunnerNavModule} from "../../../runner-components/nav/nav.module";
import {JoinListModule} from "hudongba-components";
import {SearchFilterModule} from "../../../runner-components/search-filter/search-filter.module";
import {CoachListModule} from "../../../coach/coach-list/coach-list.module";
import {CoreFormsViewModule} from "../../core-components/core-forms-view/core-forms-view.module";
import {SwiperDefaultModule} from "../../../runner-components/swiper-default/swiper-default.module";
import { CoreUtilService } from '../../core-util.service';

import { SwiperModule } from 'meepo-swiper';

@NgModule({
  imports: [
    CommonModule,
    CoreIndexRoutingModule,
      EditBtnModule,
      CoreComponentsModule,
      SwiperDefaultModule,
      RunnerNavModule,
      JoinListModule,
      SearchFilterModule,
      CoachListModule,
      CoreFormsViewModule,
      SwiperModule
  ],
  declarations: [CoreIndexComponent],
  providers: [CoreUtilService]
})
export class CoreIndexModule { }
