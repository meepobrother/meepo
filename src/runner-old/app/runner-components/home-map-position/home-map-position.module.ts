import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeMapPositionComponent } from './home-map-position.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeMapPositionComponent],
  exports: [HomeMapPositionComponent]
})
export class HomeMapPositionModule { }
