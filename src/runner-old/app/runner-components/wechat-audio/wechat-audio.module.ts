import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WechatAudioComponent } from './wechat-audio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WechatAudioComponent],
  exports: [WechatAudioComponent]
})
export class WechatAudioModule { }
