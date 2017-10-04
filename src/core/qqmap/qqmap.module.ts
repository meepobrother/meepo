import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QqmapPage, QqmapToken } from './qqmap-page';
import { QqmapContainer } from './qqmap-container';
const components = [
    QqmapPage,
    QqmapContainer
];
import { DefineOverlay } from './overlay';
import { Control } from './control';
import { MarkerCluster } from './marker';

const directives = [
    DefineOverlay,
    Control,
    MarkerCluster
];
@NgModule({
    declarations: [
        ...components,
        ...directives
    ],
    imports: [ CommonModule ],
    exports: [
        ...components,
        ...directives
    ],
    providers: [
        {
            provide: QqmapToken,
            useValue: '4MHBZ-JVL35-WLMII-Q3NME-3Z2G2-PKBJJ'
        }
    ],
})
export class QqmapModule {}
