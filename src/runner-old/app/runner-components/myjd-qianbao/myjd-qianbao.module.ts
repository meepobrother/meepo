import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyjdQianbaoComponent } from './myjd-qianbao.component';
import {MyjdContentModule} from "../myjd-content/myjd-content.module";

@NgModule({
  imports: [
    CommonModule,
    MyjdContentModule
  ],
  declarations: [MyjdQianbaoComponent],
  exports: [MyjdQianbaoComponent]
})
export class MyjdQianbaoModule { }
