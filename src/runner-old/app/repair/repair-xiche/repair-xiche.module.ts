import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepairXicheRoutingModule } from './repair-xiche-routing.module';
import { RepairXicheComponent } from './repair-xiche.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CarfilesService} from "services-components/src/app/repair-services/carfiles.service";
import {WechatAudioModule} from "../../runner-components/wechat-audio/wechat-audio.module";
import {OrderCreateModule} from "../../runner-components/order-create/order-create.module";
import {RepairListModule} from "../repair-list/repair-list.module";
import {PayOrderModule} from "../../components-useing/pay-order/pay-order.module";

@NgModule({
  imports: [
    CommonModule,
    RepairXicheRoutingModule,
    RepairListModule,
    ReactiveFormsModule,
    WechatAudioModule,
    OrderCreateModule,
    PayOrderModule
  ],
  declarations: [RepairXicheComponent],
  providers: [CarfilesService]
})
export class RepairXicheModule { }
