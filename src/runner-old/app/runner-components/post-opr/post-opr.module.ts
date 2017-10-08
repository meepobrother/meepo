import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostOprComponent} from "./post-opr.component";
import {WeuiBtnModule} from "../weui-btn/weui-btn.module";
import {WeuiBtnAreaModule} from "../weui-btn-area/weui-btn-area.module";

@NgModule({
  imports: [
    CommonModule,
    WeuiBtnModule,
    WeuiBtnAreaModule
  ],
  declarations: [
    PostOprComponent
  ],
  exports: [
    PostOprComponent
  ]
})
export class PostOprModule { }
