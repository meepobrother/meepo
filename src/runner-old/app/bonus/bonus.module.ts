import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BonusRoutingModule } from './bonus-routing.module';
import { BonusRoutingComponent } from './bonus-routing/bonus-routing.component';

@NgModule({
  imports: [
    CommonModule,
    BonusRoutingModule
  ],
  declarations: [BonusRoutingComponent]
})
export class BonusModule { }
