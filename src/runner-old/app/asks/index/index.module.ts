import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import {AsksListModule} from "../asks-list/asks-list.module";
import {AlbumLeaderModule} from "../../runner-components/album-leader/album-leader.module";
import {FeedTabModule} from "../../runner-components/feed-tab/feed-tab.module";

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    AsksListModule,
    AlbumLeaderModule,
    FeedTabModule
  ],
  declarations: [IndexComponent]
})
export class AsksIndexModule { }
