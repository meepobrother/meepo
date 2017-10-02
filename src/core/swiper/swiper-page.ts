import {
    Component,
    OnInit,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    ContentChildren,
    QueryList,
    Inject,
    InjectionToken,
    AfterContentInit,
    EventEmitter,
    Optional,
    Self,
    ElementRef
} from '@angular/core';

import { SwiperContainer } from './swiper-container';
export const SwiperJsToken = new InjectionToken('SwiperJsToken');

import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'swiper-page',
    templateUrl: 'swiper-page.html',
    styleUrls: ['swiper.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false
})
export class SwiperPage implements OnInit, AfterContentInit {

    @ContentChildren(SwiperContainer)
    _containers: QueryList<SwiperContainer>;

    laodSuccess: EventEmitter<any> = new EventEmitter();

    randStr: number = new Date().getTime();
    swiper: any;
    swipers: any;
    constructor(
        @Inject(DOCUMENT) public document: any,
        @Inject(SwiperJsToken) public swiperJs: string,
        public ele: ElementRef
    ) { }

    ngOnInit() { }

    ngAfterContentInit() {
        this.loadJScript();
    }
    // 加载swiper.min.js
    loadJScript() {
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.swiperJs;
        script.onload = () => {
            this.swiper = window['Swiper'];
            this.laodSuccess.emit(this.swiper);
        };
        script.onerror = () => {
            console.log('Swiper插件加载失败');
        };
        this.document.body.appendChild(script);
    }
    // 添加swiper container
    addSwiper(swiper: SwiperContainer) {
        this.swipers = [...this.swipers, swiper];
    }
    // 关联swiper
    related(swiper1: SwiperContainer, swiper2: SwiperContainer) {
        swiper1._swiper.params.control = swiper2._swiper;
        swiper2._swiper.params.control = swiper1._swiper;
        const swiper3 = new this.swiper(this.ele.nativeElement, {
            control: [swiper1._swiper, swiper2._swiper]
        });
    }
}
