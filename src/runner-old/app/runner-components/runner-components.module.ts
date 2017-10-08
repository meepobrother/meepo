import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RunnerUtilService} from "./runner-util.service";
import {EditBtnModule} from "./edit-btn/edit-btn.module";
import {GeolocationModule} from "./geolocation/geolocation.module";
import {AssistiveTouchModule} from "./assistive-touch/assistive-touch.module";
import {FooterModule} from "./footer/footer.module";

@NgModule({
  imports: [
    CommonModule,
    EditBtnModule,
    GeolocationModule,
    AssistiveTouchModule,
    FooterModule
  ],
  declarations: [],
  exports: [],
  providers: [RunnerUtilService]
})
export class RunnerComponentsModule { }
