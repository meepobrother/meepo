import {
    Component,
    OnInit,
    Inject,
    InjectionToken,
    Output,
    EventEmitter,
    ViewEncapsulation,
    HostBinding,
    AfterContentInit
} from '@angular/core';

export const QqmapToken = new InjectionToken('QqmapToken');

import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'qqmap-page',
    templateUrl: 'qqmap-page.html',
    styleUrls: ['qqmap-page.css'],
    encapsulation: ViewEncapsulation.None
})
export class QqmapPage implements OnInit, AfterContentInit {
    @HostBinding('class.qqmap-page') _page: boolean = true;

    @Output() laodSuccess: EventEmitter<any> = new EventEmitter();

    maps: Map<number, any> = new Map();
    qq: any;

    constructor(
        @Inject(QqmapToken) public qqmapToken: string,
        @Inject(DOCUMENT) public document: any
    ) { }

    ngOnInit() { }
    ngAfterContentInit() {
        this.loadJs();
    }
    loadJs() {
        const src = `http://map.qq.com/api/js?v=2.exp&key=${this.qqmapToken}&callback=initMap`;
        window['initMap'] = () => {
            this.qq = window['qq'];
            this.laodSuccess.emit(this.qq);
        };
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.onload = () => { };
        script.onerror = () => { };
        this.document.body.appendChild(script);
    }
}
