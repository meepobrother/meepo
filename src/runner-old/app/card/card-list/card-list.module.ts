import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDesignComponent } from './card-design/card-design.component';
import {RouterModule} from "@angular/router";
import { CardViewComponent } from './card-view/card-view.component';
import { CardColorsComponent } from './card-colors/card-colors.component';
import {FormsModule} from "@angular/forms";
import { CardDateComponent } from './card-date/card-date.component';
import { CardWeekComponent } from './card-week/card-week.component';
import {WeekTagModule} from "./week-tag/week-tag.module";
import { CardBonusComponent } from './card-bonus/card-bonus.component';
import {BonusTagModule} from "./bonus-tag/bonus-tag.module";
import {ShopTagModule} from "./shop-tag/shop-tag.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    WeekTagModule,
    BonusTagModule,
    ShopTagModule
  ],
  declarations: [CardDesignComponent, CardViewComponent, CardColorsComponent, CardDateComponent, CardWeekComponent, CardBonusComponent],
  exports: [CardDesignComponent,CardViewComponent,CardColorsComponent,CardDateComponent,CardWeekComponent,CardBonusComponent]
})
export class CardListModule { }
