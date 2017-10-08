import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZanActionsheetComponent } from './zan-actionsheet.component';
import {ZanModalModule} from "../zan-modal/zan-modal.module";
import {ZanIconModule} from "../zan-icon/zan-icon.module";

@NgModule({
  imports: [
    CommonModule,
    ZanModalModule,
    ZanIconModule
  ],
  declarations: [ZanActionsheetComponent],
  exports: [ZanActionsheetComponent]
})
export class ZanActionsheetModule { }
