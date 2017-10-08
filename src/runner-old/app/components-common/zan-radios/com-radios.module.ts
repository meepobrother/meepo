import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZanRadiosComponent } from './com-radios.component';
import {ZanIconModule} from "../zan-icon/zan-icon.module";

@NgModule({
  imports: [
    CommonModule,
    ZanIconModule
  ],
  declarations: [ZanRadiosComponent],
  exports: [ZanRadiosComponent]
})
export class ZanRadiosModule { }
