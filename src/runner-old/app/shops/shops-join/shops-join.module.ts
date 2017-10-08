import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopsJoinRoutingModule } from './shops-join-routing.module';
import { ShopsJoinComponent } from './shops-join.component';

@NgModule({
  imports: [
    CommonModule,
    ShopsJoinRoutingModule
  ],
  declarations: [ShopsJoinComponent]
})
export class ShopsJoinModule { }
