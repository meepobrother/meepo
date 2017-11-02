import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeWidgetView } from './free-widget-view';
import { FreeWidgetSetting } from './free-widget-setting';

import { PortalModule } from '@angular/cdk/portal';
import { WidgetService } from '../services';

@NgModule({
    declarations: [
        FreeWidgetView,
        FreeWidgetSetting
    ],
    imports: [
        CommonModule,
        PortalModule
    ],
    exports: [
        FreeWidgetView,
        FreeWidgetSetting
    ],
    providers: [
        WidgetService
    ],
})
export class DesignLayoutsModule { }
