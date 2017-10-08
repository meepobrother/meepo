import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsksFindRoutingModule } from './asks-find-routing.module';
import { AsksFindComponent } from './asks-find.component';
import {AlbumLeaderModule} from "../../runner-components/album-leader/album-leader.module";
import {FeedTabModule} from "../../runner-components/feed-tab/feed-tab.module";

@NgModule({
  imports: [
    CommonModule,
    AsksFindRoutingModule,
    FeedTabModule,
    AlbumLeaderModule
  ],
  declarations: [AsksFindComponent]
})
export class AsksFindModule { }
