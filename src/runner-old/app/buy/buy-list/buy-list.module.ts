import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RunnerUtilService} from "../../runner-components/runner-util.service";
import {AlionModule} from '../../runner-components/index';
import {FooterModule} from '../../runner-components/index';
import { BuyStatusComponent } from './buy-status/buy-status.component';
import { BuyFooterComponent } from './buy-footer/buy-footer.component';
import {FormsModule} from "@angular/forms";
import {WechatAudioModule} from "../../runner-components/wechat-audio/wechat-audio.module";
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";

@NgModule({
  imports: [
    CommonModule,
    AlionModule,
    FooterModule,
    FormsModule,
    WechatAudioModule,
    EditBtnModule
  ],
  declarations: [BuyStatusComponent, BuyFooterComponent],
  exports: [BuyStatusComponent,BuyFooterComponent],
  providers: [RunnerUtilService]
})
export class BuyListModule { }
