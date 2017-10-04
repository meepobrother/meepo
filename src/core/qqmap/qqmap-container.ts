import {
    Component,
    OnInit,
    HostBinding,
    ElementRef,
    Input
} from '@angular/core';
import { QqmapPage } from './qqmap-page';
@Component({
    selector: 'qqmap-container',
    template: ``
})
export class QqmapContainer implements OnInit {
    @HostBinding('class.qqmap-container') _container: boolean = true;
    // 平移空间
    @Input() panControl: boolean = true;
    // 缩放空间
    @Input() zoomControl: boolean = true;
    // 比例尺
    @Input() scaleControl: boolean = true;
    // 禁止所有的默认控件
    @Input() disableDefaultUI: boolean = false;

    @Input() lat: number = 39.916527;
    @Input() lng: number = 116.397128;

    map: any;
    constructor(
        public ele: ElementRef,
        public qqmapPage: QqmapPage
    ) { }

    ngOnInit() {
        this.qqmapPage.laodSuccess.subscribe(qq => {
            this.init(qq);
        });
    }

    init(qq: any) {
        const latlng = new qq.maps.LatLng(this.lat, this.lng);
        const options = {
            panControl: this.panControl,
            zoomControl: this.zoomControl,
            scaleControl: this.scaleControl,
            disableDefaultUI: this.disableDefaultUI,
            mapTypeId: qq.maps.MapTypeId.ROADMAP,
            center: latlng,
            zoom: 16
        };

        this.map = new qq.maps.Map(this.ele.nativeElement, options);
    }
}
