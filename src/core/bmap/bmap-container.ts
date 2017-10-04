import {
    Component,
    OnInit,
    InjectionToken,
    Inject,
    EventEmitter,
    Output,
    AfterViewInit,
    HostBinding,
    Optional,
    SkipSelf,
    ElementRef,
    ViewChild
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { BmapPage } from './bmap-page';

// control

@Component({
    selector: 'bmap-container',
    template: `

    `
})
export class BmapContainer implements OnInit {
    @HostBinding('class.bmap-container') _container: boolean = true;
    BMap: any;
    // 地图实例
    _map: any;
    constructor(
        @Inject(DOCUMENT) public document: any,
        @Optional() @SkipSelf() public _page: BmapPage,
        public ele: ElementRef
    ) { }

    ngOnInit() {
        this._page.laodSuccess.subscribe(res => {
            this.BMap = res;
            this.initMap();
        });
    }

    initMap() {
        const BMap = this.BMap;
        const map = new BMap.Map(this.ele.nativeElement);
        const point = new BMap.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);
        this._map = map;
    }

}


