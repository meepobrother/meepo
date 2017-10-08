import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    IndexRoutingModule,
    SwiperDefaultModule
  ],
  declarations: [IndexComponent]
})
export class CarsIndexModule { }
