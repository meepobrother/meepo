import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeuiMsgComponent} from "./weui-msg.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeuiMsgComponent],
  exports: [WeuiMsgComponent]
})
export class WeuiMsgModule { }
