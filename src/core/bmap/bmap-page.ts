import {
    Component,
    OnInit,
    ViewEncapsulation,
    HostBinding,
    Output,
    EventEmitter,
    AfterContentInit,
    Inject,
    InjectionToken
} from '@angular/core';

import {
    DOCUMENT
} from '@angular/common';
export const BmapToken = new InjectionToken('BmapToken');


@Component({
    selector: 'bmap-page',
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: ['bmap-page.css'],
    encapsulation: ViewEncapsulation.None
})
export class BmapPage implements OnInit, AfterContentInit {
    @HostBinding('class.bmap-page') _page: boolean = true;

    maps: Map<number, any> = new Map();
    BMap: any;

    @Output() laodSuccess: EventEmitter<any> = new EventEmitter();

    constructor(
        @Inject(DOCUMENT) public document: any,
        @Inject(BmapToken) public bmapToken: string
    ) { }
    ngOnInit() { }

    ngAfterContentInit() {
        setTimeout(() => {
            this.loadJs();
        }, 500);
    }

    loadJs() {
        this.document['initMap'] = () => {
            this.BMap = window['BMap'];
            this.laodSuccess.emit(this.BMap);
        };
        const src = `http://api.map.baidu.com/api?v=2.0&ak=${this.bmapToken}&callback=document.initMap`;
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.onload = () => { };
        script.onerror = () => { };
        this.document.body.appendChild(script);
    }
}
