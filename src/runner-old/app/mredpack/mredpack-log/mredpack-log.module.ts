import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MredpackLogRoutingModule } from './mredpack-log-routing.module';
import { MredpackLogComponent } from './mredpack-log.component';

@NgModule({
  imports: [
    CommonModule,
    MredpackLogRoutingModule
  ],
  declarations: [MredpackLogComponent]
})
export class MredpackLogModule { }
