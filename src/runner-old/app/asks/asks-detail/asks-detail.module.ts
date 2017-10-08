import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsksDetailRoutingModule } from './asks-detail-routing.module';
import { AsksDetailComponent } from './asks-detail.component';
import {AlbumLeaderModule} from "../../runner-components/album-leader/album-leader.module";

@NgModule({
  imports: [
    CommonModule,
    AsksDetailRoutingModule,
    AlbumLeaderModule
  ],
  declarations: [AsksDetailComponent]
})
export class AsksDetailModule { }
