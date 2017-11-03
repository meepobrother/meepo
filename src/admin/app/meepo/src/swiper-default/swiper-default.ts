import {
    Component, OnInit, HostBinding,
    ViewChildren, AfterViewInit, ElementRef,
    Input, Inject, EventEmitter, Output,
    ViewEncapsulation, ViewChild
} from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'swiper-default',
    templateUrl: './swiper-default.html',
    styleUrls: ['./swiper-default.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SwiperDefault implements OnInit, AfterViewInit {
    swiperJs: string = 'https://meepo.com.cn/meepo/libs/swiper.min.js';
    swiper: any;
    laodSuccess: Subject<any> = new Subject();
    @ViewChild('container') container: ElementRef;
    constructor(
        public ele: ElementRef,
        @Inject(DOCUMENT) public document: any
    ) { 
        this.laodSuccess.subscribe(swiper=>{
            this.swiper = new swiper(this.container.nativeElement, {});
        });
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.loadJScript();
    }

    loadJScript() {
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.swiperJs;
        script.onload = () => {
            this.swiper = window['Swiper'];
            this.laodSuccess.next(this.swiper);
        };
        script.onerror = () => {
            console.log('Swiper插件加载失败');
        };
        this.document.body.appendChild(script);
    }
}