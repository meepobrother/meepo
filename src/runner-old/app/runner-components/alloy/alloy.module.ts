import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorpComponent } from './corp/corp.component';
import { FingerComponent } from './finger/finger.component';
import { LeverComponent } from './lever/lever.component';
import { TouchComponent } from './touch/touch.component';
import { TransformComponent } from './transform/transform.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { IselectComponent } from './iselect/iselect.component';
import { IselectInfiniteComponent } from './iselect-infinite/iselect-infinite.component';
import { IselectMultipleComponent } from './iselect-multiple/iselect-multiple.component';
import { LoadingComponent } from './loading/loading.component';
import { DripComponent } from './drip/drip.component';
import { DripRefreshComponent } from './drip-refresh/drip-refresh.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CorpComponent,
    FingerComponent,
    LeverComponent,
    TouchComponent,
    TransformComponent,
    LoadMoreComponent,
    IselectComponent,
    IselectInfiniteComponent,
    IselectMultipleComponent,
    LoadingComponent,
    DripComponent,
    DripRefreshComponent
  ],
  exports: [
    CorpComponent,
    FingerComponent,
    LeverComponent,
    TouchComponent,
    TransformComponent,
    LoadMoreComponent,
    IselectComponent,
    IselectInfiniteComponent,
    IselectMultipleComponent,
    LoadingComponent,
    DripComponent,
    DripRefreshComponent
  ]
})
export class AlloyModule { }
