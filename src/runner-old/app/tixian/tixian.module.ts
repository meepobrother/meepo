import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TixianRoutingModule } from './tixian-routing.module';
import { TixianRouterComponent } from './tixian-router/tixian-router.component';
import {FooterModule} from "../runner-components/footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    TixianRoutingModule,
    FooterModule
  ],
  declarations: [TixianRouterComponent]
})
export class TixianModule { }
