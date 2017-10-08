import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadImgComponent } from './head-img.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeadImgComponent],
  exports: [HeadImgComponent]
})
export class HeadImgModule { }
