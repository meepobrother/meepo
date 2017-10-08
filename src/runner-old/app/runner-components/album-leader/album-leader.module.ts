import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumLeaderComponent } from './album-leader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlbumLeaderComponent],
  exports: [AlbumLeaderComponent]
})
export class AlbumLeaderModule { }
