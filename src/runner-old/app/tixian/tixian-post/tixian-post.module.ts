import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TixianPostRoutingModule } from './tixian-post-routing.module';
import { TixianPostComponent } from './tixian-post.component';
import {ControlsOptionTapModule} from "../../runner-components/controls-option-tap/controls-option-tap.module";
import {TixianLogService} from "services-components";
import {PaySelectMoneyModule} from "../../imeepos/pay/src/pay-select-money/pay-select-money.module";

@NgModule({
  imports: [
    CommonModule,
    TixianPostRoutingModule,
    ControlsOptionTapModule,
    PaySelectMoneyModule
  ],
  declarations: [TixianPostComponent],
  providers: [TixianLogService]
})
export class TixianPostModule { }
