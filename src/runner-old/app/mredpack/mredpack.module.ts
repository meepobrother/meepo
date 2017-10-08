import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MredpackRoutingModule } from './mredpack-routing.module';
import { MredpackComponent } from './mredpack/mredpack.component';

@NgModule({
  imports: [
    CommonModule,
    MredpackRoutingModule
  ],
  declarations: [MredpackComponent]
})
export class MredpackModule { }
