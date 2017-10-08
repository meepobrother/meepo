import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudRoutingModule } from './cloud-routing.module';
import { CloudRouterComponent } from './cloud-router/cloud-router.component';
import {RunnerUtilService} from "../runner-components/runner-util.service";
import {FooterModule} from "../runner-components/footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    CloudRoutingModule,
    FooterModule
  ],
  declarations: [CloudRouterComponent],
  providers: [RunnerUtilService]
})
export class CloudModule { }
