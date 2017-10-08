import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorePagesRoutingModule } from './core-pages-routing.module';
import { CoreRouteComponent } from './core-route/core-route.component';
import {CoreComponentsModule} from "../core-components/core-components.module";
import {GeolocationModule} from "../../runner-components/geolocation/geolocation.module";
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {FooterModule} from "../../runner-components/footer/footer.module";
import { RunnerUtilService } from '../../runner-components/runner-util.service';
import { CoreUtilService } from '../core-util.service';
@NgModule({
  imports: [
    CommonModule,
    CorePagesRoutingModule,
    CoreComponentsModule,
    GeolocationModule,
    EditBtnModule,
    FooterModule
  ],
  declarations: [CoreRouteComponent],
  providers: [
    RunnerUtilService,
    CoreUtilService
  ]
})
export class CorePagesModule { }
