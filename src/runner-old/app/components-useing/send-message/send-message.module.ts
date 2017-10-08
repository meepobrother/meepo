import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendMessageComponent } from './send-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SendMessageComponent],
  exports: [SendMessageComponent]
})
export class SendMessageModule { }
