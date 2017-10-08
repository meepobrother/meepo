import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';

import { UploaderModule } from '../../runner-components/uploader/uploader.module';
const COMPONENT_MODULES = [
  UploaderModule
]
@NgModule({
  imports: [
    CommonModule,
    ...COMPONENT_MODULES,
    IndexRoutingModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
