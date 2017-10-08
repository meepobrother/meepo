import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticsComponent } from './logistics.component';
import {ZanIconModule} from "../../components-common/zan-icon/zan-icon.module";

@NgModule({
  imports: [
    CommonModule,
    ZanIconModule
  ],
  declarations: [LogisticsComponent],
  exports: [LogisticsComponent]
})
export class LogisticsModule { }
