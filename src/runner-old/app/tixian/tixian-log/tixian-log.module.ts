import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TixianLogRoutingModule } from './tixian-log-routing.module';
import { TixianLogComponent } from './tixian-log.component';
import {TixianLogService} from "services-components";
import {PayRecordModule} from "../../imeepos/pay/src/pay-record/pay-record.module";

@NgModule({
  imports: [
    CommonModule,
    TixianLogRoutingModule,
    PayRecordModule
  ],
  declarations: [TixianLogComponent],
  providers: [TixianLogService]
})
export class TixianLogModule { }
