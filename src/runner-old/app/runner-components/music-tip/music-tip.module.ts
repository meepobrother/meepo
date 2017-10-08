import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MusicTipComponent } from './music-tip.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MusicTipComponent],
  exports: [MusicTipComponent]
})
export class MusicTipModule { }
