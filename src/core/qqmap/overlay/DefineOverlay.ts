import {
    Directive,
    OnInit,
    ElementRef,
    Renderer2,
    Input,
    HostBinding
} from '@angular/core';
import { QqmapContainer } from '../qqmap-container';
import { QqmapPage } from '../qqmap-page';

@Directive({
    selector: 'define-overlay',
})
export class DefineOverlay implements OnInit {
    @Input() lat: number = 39.916527;
    @Input() lng: number = 116.397128;

    @HostBinding('style.position') _position: string = 'absolute';

    CustomOverlay: any;
    overlay: any;
    constructor(
        public _container: QqmapContainer,
        public _page: QqmapPage,
        public ele: ElementRef,
        public render: Renderer2
    ) { }
    ngOnInit() {

        this._page.laodSuccess.subscribe(qq => {
            // 定义类
            const ele = this.ele.nativeElement;
            const render = this.render;
            function CustomOverlay(position, index) {
                this.index = index;
                this.position = position;
            }
            CustomOverlay.prototype = new qq.maps.Overlay();
            CustomOverlay.prototype.construct = function () {
                const panes = this.getPanes();
                panes.overlayMouseTarget.appendChild(ele);
                this.div = ele;
            };
            CustomOverlay.prototype.draw = function () {
                const overlayProjection = this.getProjection();
                const pixel = overlayProjection.fromLatLngToDivPixel(this.position);
                const left = pixel.x - 12;
                const top = pixel.y - 12;
                render.setStyle(ele, 'left', left + 'px');
                render.setStyle(ele, 'top', top + 'px');
            };
            CustomOverlay.prototype.destroy = function () {
                this.div.parentNode.removeChild(this.div);
                this.div = null;
            };

            this.CustomOverlay = CustomOverlay;
            this.init(qq);
        });
    }

    init(qq: any) {
        const latlng = new qq.maps.LatLng(this.lat, this.lng);
        this.overlay = new this.CustomOverlay(latlng, 0);
        this.overlay.setMap(this._container.map);
    }
}
