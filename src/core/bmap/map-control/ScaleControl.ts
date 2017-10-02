import { Directive, OnInit, Input } from '@angular/core';
import { BmapPage } from '../bmap-page';
import { BmapContainer } from '../bmap-container';

import { ControlAnchor } from './ControlAnchor';

@Directive({
    selector: 'scale-control'
})
export class ScaleControl implements OnInit {
    @Input() anchor: ControlAnchor = 'BMAP_ANCHOR_TOP_LEFT';
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
        this.control = new BMap.ScaleControl({ anchor: window[this.anchor] });
        this._container._map.addControl(this.control);
    }
}
