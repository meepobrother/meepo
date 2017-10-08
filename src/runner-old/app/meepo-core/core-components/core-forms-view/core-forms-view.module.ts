import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreFormsViewComponent } from './core-forms-view.component';
import {AlionModule} from "../../../runner-components/alion/alion.module";
import {WechatAudioModule} from "../../../runner-components/wechat-audio/wechat-audio.module";

@NgModule({
  imports: [
    CommonModule,
      AlionModule,
      WechatAudioModule
  ],
  declarations: [CoreFormsViewComponent],
  exports: [CoreFormsViewComponent]
})
export class CoreFormsViewModule { }
