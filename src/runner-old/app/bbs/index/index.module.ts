import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import {TimeSelectModule} from "../../runner-components/time-select/time-select.module";
import {GongGaoModule} from "../../runner-components/gong-gao/gong-gao.module";
import {TopicItemModule} from "../../runner-components/topic-item/topic-item.module";
import {TopicsService} from "services-components/src/app/bbs-services/topics.service";
import {QqzoneItemModule} from "../../runner-components/qqzone-item/qqzone-item.module";
import {BbsHeaderModule} from "../../runner-components/bbs-header/bbs-header.module";
import {ThreadclassService} from "services-components";
import {BbsListModule} from "../bbs-list/bbs-list.module";
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {FormsModule} from "@angular/forms";
import {FeedTabModule} from "../../runner-components/feed-tab/feed-tab.module";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    TimeSelectModule,
    QqzoneItemModule,
    GongGaoModule,
    TopicItemModule,
    BbsHeaderModule,
    FeedTabModule,
    SwiperDefaultModule,
    BbsListModule,
    EditBtnModule,
    FormsModule
  ],
  declarations: [IndexComponent],
  providers: [TopicsService,ThreadclassService]
})
export class BbsIndexModule { }
