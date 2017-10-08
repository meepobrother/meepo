import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsksInfoRoutingModule } from './asks-info-routing.module';
import { AsksInfoComponent } from './asks-info.component';
import {AlbumLeaderModule} from "../../runner-components/album-leader/album-leader.module";

@NgModule({
  imports: [
    CommonModule,
    AsksInfoRoutingModule,
    AlbumLeaderModule
  ],
  declarations: [AsksInfoComponent]
})
export class AsksInfoModule { }
