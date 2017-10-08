import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

import {MdCardModule} from "@angular/material";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    SwiperDefaultModule,
    MdCardModule
  ],
  declarations: [IndexComponent]
})
export class ListenIndexModule { }
