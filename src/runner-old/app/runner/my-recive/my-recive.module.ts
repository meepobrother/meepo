import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyReciveRoutingModule } from './my-recive-routing.module';
import { MyReciveComponent } from './my-recive.component';
import {TaskService} from "services-components";
import {FeedTabModule} from "../../runner-components/feed-tab/feed-tab.module";
import { CoreFormsViewModule } from '../../meepo-core/core-components/core-forms-view/core-forms-view.module';
@NgModule({
  imports: [
    CommonModule,
    MyReciveRoutingModule,
    FeedTabModule,
    CoreFormsViewModule
  ],
  declarations: [MyReciveComponent],
  providers: [TaskService]
})
export class MyReciveModule { }
