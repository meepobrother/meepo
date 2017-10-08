import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreFormsComponent } from './core-forms.component';
import { ReactiveFormsModule } from "@angular/forms";
import {CoreAddressModule} from "../core-address/core-address.module";
import {WechatAudioModule} from "../../../runner-components/wechat-audio/wechat-audio.module";
import {WhiteSpaceModule} from "../../core/white-space/white-space.module";
import {CoreBaojiaModule} from "../core-baojia/core-baojia.module";
import {UploaderModule} from "../../../runner-components/uploader/uploader.module";
import {EditBtnModule} from "../../../runner-components/edit-btn/edit-btn.module";
import {PayOrderModule} from "../../../components-useing/pay-order/pay-order.module";
import {CoreTagsModule} from "../core-tags/core-tags.module";
import {CoreFormsRuleModule} from "../core-forms-rule/core-forms-rule.module";
import {TimeSelectModule} from "../../../runner-components/time-select/time-select.module";
import {OrderCreateModule} from "../../../runner-components/order-create/order-create.module";
import {GongGaoModule} from "../../../runner-components/gong-gao/gong-gao.module";
import {CoachListModule} from "../../../coach/coach-list/coach-list.module";
// import { CoachAdvsModule } from '../../../../share/index';
import { CoreUtilService } from '../../core-util.service';
import { RunnerUtilService } from '../../../runner-components/runner-util.service';


import { Http } from '@angular/http';
import { Router,RouterModule } from '@angular/Router';

// import {
//   CoreUtilToken,
//   RunnerUtilToken
// } from '../../../../share/components/injectionToken';


@NgModule({
  imports: [
    CommonModule,
      CoreAddressModule,
      WechatAudioModule,
      WhiteSpaceModule,
      CoreBaojiaModule,
      UploaderModule,
      EditBtnModule,
      PayOrderModule,
      CoreTagsModule,
      CoreFormsRuleModule,
      TimeSelectModule,
      OrderCreateModule,
      GongGaoModule,
      RouterModule,
      CoachListModule,
      ReactiveFormsModule
  ],
  declarations: [CoreFormsComponent],
  exports: [CoreFormsComponent],
  providers: [
    CoreUtilService,
    RunnerUtilService
  ]
})
export class CoreFormsModule { }
