import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnerRoutingModule } from './runner-routing.module';
import { RunnerRouterComponent } from './runner-router/runner-router.component';
import {FooterModule} from "../runner-components/footer/footer.module";
import {EditBtnModule} from "../runner-components/edit-btn/edit-btn.module";
import {PlayerFooterModule} from "../runner-components/player-footer/player-footer.module";
import {AssistiveTouchModule} from "../runner-components/assistive-touch/assistive-touch.module";
import {GeolocationModule} from "../runner-components/geolocation/geolocation.module";
import {BuyModule} from "../buy/buy.module";

@NgModule({
  imports: [
    CommonModule,
    RunnerRoutingModule,
    FooterModule,
    EditBtnModule,
    PlayerFooterModule,
    AssistiveTouchModule,
    GeolocationModule,
    BuyModule
  ],
  declarations: [RunnerRouterComponent]
})
export class RunnerModule { }
