import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceIntroComponent } from './price-intro.component';
import {ZanIconModule} from "../../components-common/zan-icon/zan-icon.module";

@NgModule({
  imports: [
    CommonModule,
    ZanIconModule
  ],
  declarations: [PriceIntroComponent],
  exports: [PriceIntroComponent]
})
export class PriceIntroModule { }
