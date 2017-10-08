import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VanStepsComponent } from './van-steps.component';

import {ZanIconModule} from '../zan-icon/zan-icon.module';

@NgModule({
  imports: [
    CommonModule,
    ZanIconModule
  ],
  declarations: [VanStepsComponent],
  exports: [VanStepsComponent]
})
export class ZanStepsModule { }
