import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperPage, SwiperJsToken } from './swiper-page';
import { SwiperContainer } from './swiper-container';
import { SwiperWrapper } from './swiper-wrapper';
import { SwiperSlide } from './swiper-slide';

import { SwiperButtonNext } from './swiper-button-next';
import { SwiperButtonPrev } from './swiper-button-prev';

import { SwiperScrollbar } from './swiper-scrollbar';
import { SwiperPagination } from './swiper-pagination';



const COMPONENTS = [
    SwiperPage,
    SwiperContainer,
    SwiperWrapper,
    SwiperSlide,
    SwiperButtonNext,
    SwiperButtonPrev,
    SwiperScrollbar,
    SwiperPagination
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      ...COMPONENTS
  ],
  exports: [
      ...COMPONENTS
  ],
  providers: [
      {
          provide: SwiperJsToken,
          useValue: 'http://www.swiper.com.cn/dist/js/swiper.min.js'
      }
  ]
})
export class SwiperModule { }


export * from './swiper-page';
export * from './swiper-container';
export * from './swiper-wrapper';
export * from './swiper-slide';

export * from './swiper-button-next';
export * from './swiper-button-prev';

export * from './swiper-scrollbar';
export * from './swiper-pagination';
