import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbsPostRoutingModule } from './bbs-post-routing.module';
import { BbsPostComponent } from './bbs-post.component';
import {WechatAudioModule} from "../../runner-components/wechat-audio/wechat-audio.module";
import {UploaderModule} from "../../runner-components/uploader/uploader.module";
import {BbsListModule} from "../bbs-list/bbs-list.module";
import {LinkSelectModule} from "../../runner-components/link-select/link-select.module";
import {FormsModule} from "@angular/forms";
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {TopicsService} from "services-components";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    BbsPostRoutingModule,
    WechatAudioModule,
    UploaderModule,
    BbsListModule,
    LinkSelectModule,
    SwiperDefaultModule,
    FormsModule
  ],
  declarations: [BbsPostComponent],
  providers: [RunnerUtilService,TopicsService]
})
export class BbsPostModule { }
