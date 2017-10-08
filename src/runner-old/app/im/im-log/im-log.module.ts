import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImLogRoutingModule } from './im-log-routing.module';
import { ImLogComponent } from './im-log.component';
import {ImListModule} from "../im-list/im-list.module";
import {ImLogService} from "services-components";
import {CoreComponentsModule} from "../../meepo-core/core-components/core-components.module";

@NgModule({
  imports: [
    CommonModule,
    ImLogRoutingModule,
    ImListModule,
    CoreComponentsModule
  ],
  declarations: [ImLogComponent],
  providers: [ImLogService]
})
export class ImLogModule { }
