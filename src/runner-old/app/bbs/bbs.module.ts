import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BbsRoutingModule } from './bbs-routing.module';
import {BbsRouterComponent} from "./bbs-router/bbs-router.component";
import {FooterModule} from "../runner-components/footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    BbsRoutingModule,
    FooterModule
  ],
  declarations: [BbsRouterComponent]
})
export class BbsModule { }
