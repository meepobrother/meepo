import { Directive, OnInit, Input } from '@angular/core';
import { BmapPage } from '../bmap-page';
import { BmapContainer } from '../bmap-container';

import { ControlAnchor } from './ControlAnchor';
import { NavigationControlType } from './NavigationControlType';

@Directive({
    selector: 'navigation-control'
})
export class NavigationControl implements OnInit {
    @Input() anchor: ControlAnchor = 'BMAP_ANCHOR_BOTTOM_RIGHT';
    @Input() type: string = 'BMAP_NAVIGATION_CONTROL_LARGE';

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
        this.control = new BMap.NavigationControl({ anchor: window[this.anchor], type: window[this.type], enableGeolocation: true });
        this._container._map.addControl(this.control);
    }
}
