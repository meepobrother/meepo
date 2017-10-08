import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudDownloadRoutingModule } from './cloud-download-routing.module';
import { CloudDownloadComponent } from './cloud-download.component';
// import {RunnerCloudService} from "services-components/src/app/runner-services/runner-cloud.service";

@NgModule({
  imports: [
    CommonModule,
    CloudDownloadRoutingModule
  ],
  declarations: [CloudDownloadComponent],
  providers: []
})
export class CloudDownloadModule { }
