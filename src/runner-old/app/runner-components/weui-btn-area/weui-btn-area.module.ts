import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeuiBtnAreaComponent} from "./weui-btn-area.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [WeuiBtnAreaComponent],
  exports: [WeuiBtnAreaComponent]
})
export class WeuiBtnAreaModule { }
