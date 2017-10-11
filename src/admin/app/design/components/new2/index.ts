export * from './free-widget';
export * from './layout-vessel';
export * from './widget';




import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as layoutVessel from './layout-vessel';
import * as widget from './widget';
import * as freeWidget from './free-widget';


@NgModule({
    declarations: [
        layoutVessel.LayoutVesselSetting,
        layoutVessel.LayoutVesselView,
        widget.WidgetSetting,
        widget.WidgetView,
        freeWidget.FreeWidgetSetting,
        freeWidget.FreeWidgetView
    ],
    imports: [ CommonModule ],
    exports: [
        layoutVessel.LayoutVesselSetting,
        layoutVessel.LayoutVesselView,
        widget.WidgetSetting,
        widget.WidgetView,
        freeWidget.FreeWidgetSetting,
        freeWidget.FreeWidgetView
    ],
    providers: [],
})
export class New2Module {}