import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MeepoCoreModule} from "../meepo-core.module";
import {WelcomeModule} from "../../welcome/welcome.module";
import {HomeV10Module} from "../../home/home-v10.module";
import {AssistiveTouchModule} from "../../runner-components/assistive-touch/assistive-touch.module";
import {RouterModule} from "@angular/router";

import { CorePageComponent } from './core-page/core-page.component';
import {OptOtherModule} from "../../runner-components/opt-other/opt-other.module";
import {CorePagesModule} from "../core-pages/core-pages.module";
import {CloudModule} from "../../cloud/cloud.module";
import {ServicesModule} from "../../services/services.module";
import {AddressModule} from "../../address/address.module";
import { RunnerUtilService } from '../../runner-components/runner-util.service';
import { CoreUtilService } from '../core-util.service';
@NgModule({
  imports: [
    CommonModule,
    MeepoCoreModule,
    WelcomeModule,
    HomeV10Module,
    AssistiveTouchModule,
    RouterModule,
    OptOtherModule,
    CorePagesModule,
    CloudModule,
    ServicesModule,
    AddressModule
  ],
  declarations: [CorePageComponent],
  exports: [
    AssistiveTouchModule,
    CorePageComponent,
    OptOtherModule
  ],
  providers: [RunnerUtilService]
})
export class CoreShareModule { }
