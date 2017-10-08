import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsksFollowRoutingModule } from './asks-follow-routing.module';
import { AsksFollowComponent } from './asks-follow.component';

@NgModule({
  imports: [
    CommonModule,
    AsksFollowRoutingModule
  ],
  declarations: [AsksFollowComponent]
})
export class AsksFollowModule { }
