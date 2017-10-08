import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardGiftsLogRoutingModule } from './card-gifts-log-routing.module';
import { CardGiftsLogComponent } from './card-gifts-log.component';

@NgModule({
  imports: [
    CommonModule,
    CardGiftsLogRoutingModule
  ],
  declarations: [CardGiftsLogComponent]
})
export class CardGiftsLogModule { }
