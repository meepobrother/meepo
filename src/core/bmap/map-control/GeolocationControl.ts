import { Directive, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BmapPage } from '../bmap-page';
import { BmapContainer } from '../bmap-container';
import { ControlAnchor } from './ControlAnchor';
@Directive({
    selector: 'geolocation-control'
})
export class GeolocationControl implements OnInit {

    @Output() locationSuccess: EventEmitter<any> = new EventEmitter();
    @Output() locationError: EventEmitter<any> = new EventEmitter();

    @Input() anchor: ControlAnchor = 'BMAP_ANCHOR_BOTTOM_LEFT';

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
        this.control = new BMap.GeolocationControl({ anchor: window[this.anchor] });
        this.control.addEventListener('locationSuccess', (e: any) => {
            this.locationSuccess.emit(e);
        });
        this.control.addEventListener('locationError', (e: any) => {
            this.locationError.emit(e);
        });
        this._container._map.addControl(this.control);
    }
}
