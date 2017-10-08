import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyTopicRoutingModule } from './my-topic-routing.module';
import { MyTopicComponent } from './my-topic.component';
import {TopNavModule} from "../../runner-components/top-nav/top-nav.module";
import {BbsListModule} from "../bbs-list/bbs-list.module";
import {TopicsService} from "services-components";

@NgModule({
  imports: [
    CommonModule,
    MyTopicRoutingModule,
    TopNavModule,
    BbsListModule
  ],
  declarations: [MyTopicComponent],
  providers: [TopicsService]
})
export class MyTopicModule { }
