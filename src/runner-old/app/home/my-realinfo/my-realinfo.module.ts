import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRealinfoRoutingModule } from './my-realinfo-routing.module';
import { MyRealinfoComponent } from './my-realinfo.component';
import {CapIdcardUploaderModule} from "../../runner-components/cap-idcard-uploader/cap-idcard-uploader.module";
import {FormsModule} from "@angular/forms";
import {ControlsOptionTapModule} from "../../runner-components/controls-option-tap/controls-option-tap.module";
import {UploaderModule} from "../../runner-components/uploader/uploader.module";
import {OrderCreateModule} from "../../runner-components/order-create/order-create.module";
import {MobileVerityModule} from "../../runner-components/mobile-verity/mobile-verity.module";
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";

@NgModule({
  imports: [
    CommonModule,
    MyRealinfoRoutingModule,
    CapIdcardUploaderModule,
    FormsModule,
    ControlsOptionTapModule,
    UploaderModule,
    OrderCreateModule,
    MobileVerityModule,
    EditBtnModule
  ],
  declarations: [MyRealinfoComponent]
})
export class MyRealinfoModule { }
