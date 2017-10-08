import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FeedTabComponent} from './feed-tab.component';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	FeedTabComponent
  ],
  exports: [
  	FeedTabComponent
  ]
})
export class FeedTabModule { }
