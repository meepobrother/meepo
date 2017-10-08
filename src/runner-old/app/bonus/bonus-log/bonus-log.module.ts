import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonusLogRoutingModule } from './bonus-log-routing.module';
import { BonusLogComponent } from './bonus-log.component';
import {TopNavModule} from "../../runner-components/top-nav/top-nav.module";

@NgModule({
  imports: [
    CommonModule,
    BonusLogRoutingModule,
    TopNavModule
  ],
  declarations: [BonusLogComponent]
})
export class BonusLogModule { }
