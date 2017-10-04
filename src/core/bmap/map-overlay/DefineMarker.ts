import {
    Directive, OnInit, Input, Output,
    EventEmitter, ElementRef, Renderer2, HostBinding,
    OnChanges, SimpleChanges
} from '@angular/core';
import { BmapPage } from '../bmap-page';
import { BmapContainer } from '../bmap-container';
@Directive({
    selector: 'define-marker'
})
export class DefineMarker implements OnInit, OnChanges {
    _point: any;
    @Input() lat: number = 116.404;
    @Input() lng: number = 39.915;

    marker: any;
    @HostBinding('style.display') display: string = 'block';
    @HostBinding('style.position') position: string = 'absolute';

    ComplexCustomOverlay: any;
    constructor(
        public _page: BmapPage,
        public _container: BmapContainer,
        public ele: ElementRef,
        public render: Renderer2
    ) { }
    ngOnInit() {
        this._page.laodSuccess.subscribe(BMap => {

            const ele = this.ele.nativeElement;
            const map = this._container._map;
            const render = this.render;

            const ComplexCustomOverlay = function (point: any) {
                this._point = point;
            };
            ComplexCustomOverlay.prototype = new BMap.Overlay();
            ComplexCustomOverlay.prototype.initialize = function (bmap: any) {
                this._map = bmap;
                map.getPanes().labelPane.appendChild(ele);
                this._div = ele;
                return ele;
            };
            ComplexCustomOverlay.prototype.draw = function () {
                const bmap = this._map;
                const pixel = map.pointToOverlayPixel(this._point);
                const left = pixel.x + 'px';
                const top = pixel.y + 'px';
                render.setStyle(this._div, 'left', left);
                render.setStyle(this._div, 'top', top);
            };
            this.ComplexCustomOverlay = ComplexCustomOverlay;
            this.init(BMap);
        });
    }

    ngOnChanges() {

    }

    init(BMap: any) {
        this._point = new BMap.Point(this.lat, this.lng);
        if (this._point) {
            this.marker = new this.ComplexCustomOverlay(this._point);
            this._container._map.addOverlay(this.marker);
        }
    }
}
