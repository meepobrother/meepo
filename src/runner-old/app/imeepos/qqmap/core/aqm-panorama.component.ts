import { Component, Input, forwardRef, ViewChild, ElementRef, OnDestroy, EventEmitter, Output, NgZone, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Subscription } from "rxjs/Subscription";

import { LoaderService } from './loader.service';
import { AqmConfig } from './aqm.config';

declare const qq: any;
declare const window: any;
declare const UE: any;

@Component({
    selector: 'aqm-panorama',
    template: `
    
    `,
    styles: [`
        .angular-qq-maps-container { display:block; width:100%; height:100%; }
    ` ],
    host: {
        '[class.angular-qq-maps-container]': 'true'
    },
    encapsulation: ViewEncapsulation.None
})
export class AqmPanoramaComponent implements OnChanges, OnDestroy {

    @Input() options: any = {};
    @Output() ready = new EventEmitter<any>();

    private map: any = null;

    constructor(private el: ElementRef,
        private COG: AqmConfig,
        private loader: LoaderService,
        private zone: NgZone) { }

    ngOnInit() {
        this._initMap();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ('options' in changes) this._updateOptions();
    }

    private _initMap() {
        if (this.map) return;
        this.loader.load().then(() => {
            this.zone.runOutsideAngular(() => {
                try {
                    this.map = new qq.maps.Panorama(this.el.nativeElement, this.options);
                } catch (ex) {
                    console.warn('街景初始化失败', ex);
                }
            });
            this.ready.emit(this.map);
        }).catch((error: Error) => {
            console.warn('js加载失败', error);
        })
    }

    private _updateOptions() {
        this.options = Object.assign({}, this.COG.panoramaOptions, this.options);
        if (this.map) {
            this.map.setOptions(this.options);
        }
    }

    private destroy() {
    }

    ngOnDestroy(): void {
        this.destroy();
    }
}
