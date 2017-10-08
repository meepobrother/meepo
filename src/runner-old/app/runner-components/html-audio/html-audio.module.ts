import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlAudioComponent } from './html-audio.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HtmlAudioComponent],
  exports: [HtmlAudioComponent]
})
export class HtmlAudioModule { }
