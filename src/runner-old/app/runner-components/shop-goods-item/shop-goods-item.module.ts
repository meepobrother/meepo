import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopGoodsItemComponent } from './shop-goods-item.component';
import {UploaderModule} from "../uploader/uploader.module";
import {FormsModule} from "@angular/forms";
import {RunnerServicesService} from "services-components/src/app/runner-services/runner-services.service";

@NgModule({
  imports: [
    CommonModule,
    UploaderModule,
    FormsModule
  ],
  declarations: [ShopGoodsItemComponent],
  exports: [ShopGoodsItemComponent],
  providers: [RunnerServicesService]
})
export class ShopGoodsItemModule { }
