import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpListComponent } from './help-list/help-list.component';
import { HelpItemComponent } from './help-item/help-item.component';
import {WechatAudioModule} from "../../runner-components/wechat-audio/wechat-audio.module";
import { HelpTagComponent } from './help-tag/help-tag.component';
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {FormsModule} from "@angular/forms";
import {AlionModule} from "../../runner-components/alion/alion.module";
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@NgModule({
  imports: [
    CommonModule,
    AlionModule,
    WechatAudioModule,
    EditBtnModule,
    FormsModule
  ],
  declarations: [HelpListComponent, HelpItemComponent, HelpTagComponent],
  exports: [HelpListComponent, HelpItemComponent,HelpTagComponent],
  providers: [RunnerUtilService]
})
export class HelpListModule { }
