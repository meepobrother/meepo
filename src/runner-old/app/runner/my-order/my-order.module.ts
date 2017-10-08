import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrderRoutingModule } from './my-order-routing.module';
import { MyOrderComponent } from './my-order.component';
// import {TaskService} from "services-components";
import {FeedTabModule} from "../../runner-components/feed-tab/feed-tab.module";
import { CoreFormsViewModule } from '../../meepo-core/core-components/core-forms-view/core-forms-view.module';

@NgModule({
  imports: [
    CommonModule,
    MyOrderRoutingModule,
    FeedTabModule,
    CoreFormsViewModule
  ],
  declarations: [MyOrderComponent],
  providers: []
})
export class MyOrderModule { }
