import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesListComponent } from './services-list/services-list.component';
import { ServicesItemComponent } from './services-item/services-item.component';
import {SwiperModule} from "../../runner-components/swiper/swiper.module";

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [ServicesListComponent, ServicesItemComponent],
  exports: [ServicesListComponent, ServicesItemComponent]
})
export class ServicesListModule { }
