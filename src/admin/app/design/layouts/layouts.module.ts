import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeWidgetView } from './free-widget-view';
import { PortalModule } from '@angular/cdk/portal';
import { WidgetService } from '../services';
@NgModule({
    declarations: [
        FreeWidgetView
    ],
    imports: [
        CommonModule,
        PortalModule
    ],
    exports: [
        FreeWidgetView
    ],
    providers: [
        WidgetService
    ],
})
export class DesignLayoutsModule { }
