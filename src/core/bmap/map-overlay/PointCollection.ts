import { Directive, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BmapPage } from '../bmap-page';
import { BmapContainer } from '../bmap-container';
@Directive({
    selector: 'point-collection'
})
export class PointCollection implements OnInit {
    @Input() points: any[] = [];

    @Input() size: string;
    @Input() shape: string;
    @Input() color: string;

    @Output() onClick: EventEmitter<any> = new EventEmitter();

    pointCollection: any;
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
        this.pointCollection = new BMap.PointCollection(this.points, {
            size: window[this.size],
            shape: window[this.shape],
            color: this.color
        });
        this._container._map.addOverlay(this.pointCollection);
    }
}
