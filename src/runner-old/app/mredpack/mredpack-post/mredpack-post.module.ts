import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MredpackPostRoutingModule } from './mredpack-post-routing.module';
import { MredpackPostComponent } from './mredpack-post.component';
import {AlionModule} from "../../runner-components/alion/alion.module";

@NgModule({
  imports: [
    CommonModule,
    MredpackPostRoutingModule,
    AlionModule
  ],
  declarations: [MredpackPostComponent]
})
export class MredpackPostModule { }
