import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';

import {OptOtherModule} from "../../runner-components/opt-other/opt-other.module";
import {ListModule} from "../../runner-components/list/list.module";
import {SaveImageModule} from "../../runner-components/save-image/save-image.module";
import {RunnerUtilService} from "../../runner-components/runner-util.service";

@NgModule({
  imports: [
    CommonModule,
    TicketRoutingModule,
    ListModule,
    OptOtherModule,
    SaveImageModule
  ],
  declarations: [TicketComponent],
  providers: [RunnerUtilService]
})
export class TicketModule { }
