import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsksRoutingModule } from './asks-routing.module';
import {AsksRouterComponent} from "./asks-router/asks-router.component";
import {FooterModule} from "../runner-components/footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    AsksRoutingModule,
    FooterModule
  ],
  declarations: [AsksRouterComponent]
})
export class AsksModule { }
