import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicItemComponent } from './topic-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopicItemComponent],
  exports: [TopicItemComponent]
})
export class TopicItemModule { }
