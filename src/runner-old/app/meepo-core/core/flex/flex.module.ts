import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexComponent } from './flex.component';
import {FlexItemModule} from "../flex-item/flex-item.module";

@NgModule({
  imports: [
    CommonModule,
    FlexItemModule
  ],
  declarations: [FlexComponent],
  exports: [FlexComponent,FlexItemModule]
})
export class FlexModule { }
