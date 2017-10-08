import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerRoutingModule } from './runner-routing.module';
import { RunnerComponent } from './runner.component';
import {TopNavModule} from "../../runner-components/top-nav/top-nav.module";
import {FormsModule} from "@angular/forms";
import {SwiperDefaultModule} from "../../runner-components/swiper-default/swiper-default.module";

@NgModule({
  imports: [
    CommonModule,
    RunnerRoutingModule,
    TopNavModule,
    SwiperDefaultModule,
    FormsModule
  ],
  declarations: [RunnerComponent]
})
export class RunnerModule { }
