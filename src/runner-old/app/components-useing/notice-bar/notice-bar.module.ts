import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeBarComponent } from './notice-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NoticeBarComponent],
  exports: [NoticeBarComponent]
})
export class NoticeBarModule { }
