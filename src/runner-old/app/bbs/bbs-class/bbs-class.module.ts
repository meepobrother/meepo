import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbsClassRoutingModule } from './bbs-class-routing.module';
import { BbsClassComponent } from './bbs-class.component';

@NgModule({
  imports: [
    CommonModule,
    BbsClassRoutingModule
  ],
  declarations: [BbsClassComponent]
})
export class BbsClassModule { }
