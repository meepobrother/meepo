import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmapPage, BmapToken } from './bmap-page';
import { BmapContainer } from './bmap-container';

const components = [
    BmapPage,
    BmapContainer
];

import {
    MapTypeControl,
    NavigationControl,
    OverviewMapControl,
    ScaleControl,
    GeolocationControl,
    CitylistControl
} from './map-control/public_api';

import {
    Marker,
    DefineMarker,
    PointCollection
} from './map-overlay/public_api';

const directives = [
    MapTypeControl,
    NavigationControl,
    OverviewMapControl,
    ScaleControl,
    GeolocationControl,
    CitylistControl,
    Marker,
    DefineMarker,
    PointCollection
];

@NgModule({
    declarations: [
        ...components,
        ...directives
    ],
    imports: [CommonModule],
    exports: [
        ...components,
        ...directives
    ],
    providers: [
        {
            provide: BmapToken,
            useValue: 'Q4zxgkmrwPZvOXIC2lb9Cjka'
        }
    ],
})
export class BmapModule { }
