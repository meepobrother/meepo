import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import {RunnerComponentsModule} from "../../runner-components/runner-components.module";
import {TopNavModule} from "../../runner-components/top-nav/top-nav.module";

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    RunnerComponentsModule,
    TopNavModule
  ],
  declarations: [PostComponent]
})
export class PostModule { }
