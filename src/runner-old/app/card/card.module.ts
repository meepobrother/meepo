import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardRoutingModule } from './card-routing.module';
import { CardRouterComponent } from './card-router/card-router.component';
import {FooterModule} from "../runner-components/footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    CardRoutingModule,
    FooterModule
  ],
  declarations: [CardRouterComponent]
})
export class CardModule { }
