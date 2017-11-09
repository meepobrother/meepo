import { Component, OnInit, Inject, Input, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs/Subject';
declare const jQuery;
import { MeepoMarqueeDefault } from '../../../../classes';

@Component({
    selector: 'meepo-marquee-view',
    templateUrl: './meepo-marquee-view.html',
    styleUrls: ['./meepo-marquee-view.scss']
})
export class MeepoMarqueeView implements OnInit {
    swiperJs: string = 'https://meepo.com.cn/meepo/libs/jquery.marquee/jquery.marquee.min.js';
    swiper: any;
    laodSuccess: Subject<any> = new Subject();

    @ViewChild('marquee') marquee: ElementRef;

    @Input() widget: MeepoMarqueeDefault = new MeepoMarqueeDefault();
    constructor(
        @Inject(DOCUMENT) public document: any
    ) { 
        this.laodSuccess.subscribe((scroxt: any)=>{
            jQuery(this.marquee.nativeElement).marquee();
        });
    }

    ngOnInit() { 
        this.loadJScript();
    }

    loadJScript() {
        const script = this.document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.swiperJs;
        script.onload = () => {
            this.swiper = window['scroxt'];
            this.laodSuccess.next(this.swiper);
        };
        script.onerror = () => {
            console.log('Swiper插件加载失败');
        };
        this.document.body.appendChild(script);
    }
}
