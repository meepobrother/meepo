import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconSelectComponent } from './icon-select.component';
import {AlionModule} from "../alion/alion.module";

@NgModule({
  imports: [
    CommonModule,
    AlionModule
  ],
  declarations: [IconSelectComponent],
  exports: [IconSelectComponent]
})
export class IconSelectModule { }
