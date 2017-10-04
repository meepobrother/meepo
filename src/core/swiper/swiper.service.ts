import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DOCUMENT } from '@angular/common';

export const SwiperJsToken = new InjectionToken('SwiperJsToken');


@Injectable()
export class SwiperService {
    laodSuccess: Subject<any> = new Subject();
    swiper: any;
    swipers: Map<string, any> = new Map();
    constructor(
        @Inject(DOCUMENT) public document: any,
        @Inject(SwiperJsToken) public swiperJs: string
    ) { }

    addSwiper(name: string, swiper: any): this {
        this.swipers.set(name,swiper);
        return this;
    }

    getSwiper(name: string): any{
        return this.swipers.get(name);
    }

    // 加载swiper.min.js
    loadJScript(): this {
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
        return this;
    }
}
