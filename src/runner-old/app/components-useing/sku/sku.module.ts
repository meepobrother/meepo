import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkuComponent } from './sku.component';
import {ZanPopupModule} from "../../components-common/zan-popup/zan-popup.module";
import {ZanButtonModule} from "../../components-common/zan-button/zan-button.module";
import {ZanModalModule} from "../../components-common/zan-modal/zan-modal.module";
import {ZanQuantityModule} from "../../components-common/van-quantity/van-quantity.module";

@NgModule({
  imports: [
    CommonModule,
    ZanPopupModule,
    ZanButtonModule,
    ZanModalModule,
    ZanQuantityModule
  ],
  declarations: [SkuComponent],
  exports: [SkuComponent]
})
export class SkuModule { }
