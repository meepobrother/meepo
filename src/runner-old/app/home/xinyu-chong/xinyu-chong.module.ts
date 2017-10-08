import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XinyuChongRoutingModule } from './xinyu-chong-routing.module';
import { XinyuChongComponent } from './xinyu-chong.component';
import {OrderCreateModule} from "../../runner-components/order-create/order-create.module";
import {EditBtnModule} from "../../runner-components/edit-btn/edit-btn.module";
import {ControlsOptionTapModule} from "../../runner-components/controls-option-tap/controls-option-tap.module";
import {PayOrderModule} from "../../components-useing/pay-order/pay-order.module";
import {TopNavModule} from "../../runner-components/top-nav/top-nav.module";

@NgModule({
  imports: [
    CommonModule,
    XinyuChongRoutingModule,
    TopNavModule,
    OrderCreateModule,
    EditBtnModule,
    ControlsOptionTapModule,
    PayOrderModule
  ],
  declarations: [XinyuChongComponent]
})
export class XinyuChongModule { }
