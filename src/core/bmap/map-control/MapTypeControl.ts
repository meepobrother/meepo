import { Directive, OnInit, Input } from '@angular/core';
import { BmapPage } from '../bmap-page';
import { BmapContainer } from '../bmap-container';

import { MapTypes } from './MapTypes';
import { MapTypeControlType } from './MapTypeControlType';

@Directive({
    selector: 'map-type-control'
})
export class MapTypeControl implements OnInit {

    @Input() type: MapTypeControlType = 'BMAP_MAPTYPE_CONTROL_HORIZONTAL';
    @Input() mapTypes: MapTypes[] = ['BMAP_NORMAL_MAP', 'BMAP_PERSPECTIVE_MAP', 'BMAP_SATELLITE_MAP', 'BMAP_HYBRID_MAP'];
    control: any;
    constructor(
        public _page: BmapPage,
        public _container: BmapContainer
    ) { }

    ngOnInit() {
        this._page.laodSuccess.subscribe(bmap => {
            this.init(bmap);
        });
    }

    init(BMap: any) {
        const mapTypes: any[] = [];
        this.mapTypes.map((str: string) => {
            mapTypes.push(window[str]);
        });
        this.control = new BMap.MapTypeControl({ type: window[this.type], mapTypes: mapTypes });
        this._container._map.addControl(this.control);
    }
}
