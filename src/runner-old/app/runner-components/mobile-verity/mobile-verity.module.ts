import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileVerityComponent } from './mobile-verity.component';
import {FormsModule} from "@angular/forms";
import {SmsService} from "services-components/src/app/runner-services/sms.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MobileVerityComponent],
  exports: [MobileVerityComponent],
  providers: [SmsService]
})
export class MobileVerityModule { }
