import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoachMyinfoRoutingModule } from './coach-myinfo-routing.module';
import { CoachMyinfoComponent } from './coach-myinfo.component';
import {FormsModule} from "@angular/forms";
import {UploaderModule} from "../../runner-components/uploader/uploader.module";
import {CoachListModule} from "../coach-list/coach-list.module";
import {MobileVerityModule} from "../../runner-components/mobile-verity/mobile-verity.module";
import {CoachTeacherService} from "services-components";

@NgModule({
  imports: [
    CommonModule,
    CoachMyinfoRoutingModule,
    MobileVerityModule,
    CoachListModule,
    UploaderModule,
    FormsModule
  ],
  declarations: [CoachMyinfoComponent],
  providers: [CoachTeacherService]
})
export class CoachMyinfoModule { }
