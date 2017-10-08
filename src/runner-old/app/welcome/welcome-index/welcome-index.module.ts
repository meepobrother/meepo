import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeIndexRoutingModule } from './welcome-index-routing.module';
import { WelcomeIndexComponent } from './welcome-index.component';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {HIboxModule} from "../../components-web/h-ibox/h-ibox.module";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    WelcomeIndexRoutingModule,
    SwiperDefaultModule,
    EditBtnModule,
    HIboxModule
  ],
  declarations: [WelcomeIndexComponent]
})
export class WelcomeIndexModule { }
