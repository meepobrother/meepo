import {
    Directive,
    OnInit,
    Input,
    ContentChildren,
    QueryList,
    AfterContentInit
} from '@angular/core';
import { QqmapPage } from '../qqmap-page';
import { QqmapContainer } from '../qqmap-container';
import { DefineOverlay } from '../overlay/DefineOverlay';
@Directive({
    selector: 'marker-cluster',
})
export class MarkerCluster implements AfterContentInit {
    markers: any[] = [];
    markerClusterer: any;

    @Input() minimumClusterSize: number = 2;

    @ContentChildren(DefineOverlay) defineOverlays: QueryList<DefineOverlay>;

    constructor(
        public _container: QqmapContainer,
        public _page: QqmapPage
    ) { }
    ngAfterContentInit() {
        this._page.laodSuccess.subscribe(qq => {
            this.init(qq);
        });
    }

    createCluster(qq: any) {
        this.defineOverlays.map(res => {
            console.log(res.overlay);
            this.markers.push(res.overlay);
        });
        this.markerClusterer = new qq.maps.MarkerCluster({
            map: this._container.map,
            minimumClusterSize: this.minimumClusterSize,
            markers: this.markers,
            zoomOnClick: true,
            gridSize: 30,
            averageCenter: true,
            maxZoom: 18
        });
    }

    init(qq: any) {
        this.createCluster(qq);
    }
}
