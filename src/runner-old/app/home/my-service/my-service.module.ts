import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyServiceRoutingModule } from './my-service-routing.module';
import { MyServiceComponent } from './my-service.component';

@NgModule({
  imports: [
    CommonModule,
    MyServiceRoutingModule
  ],
  declarations: [MyServiceComponent]
})
export class MyServiceModule { }
