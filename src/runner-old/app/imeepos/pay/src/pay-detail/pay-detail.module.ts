import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayDetailComponent } from './pay-detail.component';
import {WhiteSpaceModule} from "../../../../meepo-core/core/white-space/white-space.module";

@NgModule({
  imports: [
    CommonModule,
    WhiteSpaceModule
  ],
  declarations: [PayDetailComponent],
  exports: [PayDetailComponent]
})
export class PayDetailModule { }
