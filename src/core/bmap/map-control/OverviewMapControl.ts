import { Directive, OnInit, Input } from '@angular/core';
import { BmapPage } from '../bmap-page';
import { BmapContainer } from '../bmap-container';

import { ControlAnchor } from './ControlAnchor';

@Directive({
    selector: 'overview-map-control'
})
export class OverviewMapControl implements OnInit {
    @Input() anchor: ControlAnchor = 'BMAP_ANCHOR_BOTTOM_RIGHT';
    @Input() isOpen: boolean = true;

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
        this.control = new BMap.OverviewMapControl({ anchor: window[this.anchor], isOpen: this.isOpen });
        this._container._map.addControl(this.control);
    }
}
