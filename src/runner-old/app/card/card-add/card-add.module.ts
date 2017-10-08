import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardAddRoutingModule } from './card-add-routing.module';
import { CardAddComponent } from './card-add.component';
import {CardListModule} from "../card-list/card-list.module";
import {NxTabbarModule} from "../../runner-components/nx-tabbar/nx-tabbar.module";
import {FormsModule} from "@angular/forms";
import {UploaderModule} from "../../runner-components/uploader/uploader.module";
import {ShopTagModule} from "../card-list/shop-tag/shop-tag.module";
import {BonusTagModule} from "../card-list/bonus-tag/bonus-tag.module";

@NgModule({
  imports: [
    CommonModule,
    CardAddRoutingModule,
    CardListModule,
    NxTabbarModule,
    FormsModule,
    UploaderModule,
    ShopTagModule,
    BonusTagModule
  ],
  declarations: [CardAddComponent],
  providers: []
})
export class CardAddModule { }
