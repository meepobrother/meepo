import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImTaskRoutingModule } from './im-task-routing.module';
import { ImTaskComponent } from './im-task.component';
import {ImListModule} from "../im-list/im-list.module";
import {ImLogService} from "services-components";
import {CoreComponentsModule} from "../../meepo-core/core-components/core-components.module";

@NgModule({
  imports: [
    CommonModule,
    ImTaskRoutingModule,
    ImListModule,
    CoreComponentsModule
  ],
  declarations: [ImTaskComponent],
  exports: [ImTaskComponent],
  providers: [ImLogService]
})
export class ImTaskModule { }
