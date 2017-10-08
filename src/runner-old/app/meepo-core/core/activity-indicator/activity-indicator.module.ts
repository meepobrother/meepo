import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityIndicatorComponent } from './activity-indicator.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActivityIndicatorComponent],
  exports: [ActivityIndicatorComponent]
})
export class ActivityIndicatorModule { }
