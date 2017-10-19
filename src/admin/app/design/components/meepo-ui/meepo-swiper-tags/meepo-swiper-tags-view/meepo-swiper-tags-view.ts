import { Component, OnInit, Input, ViewChild, ElementRef, Inject, AfterViewInit } from '@angular/core';
import { MeepoSwiperTags } from '../../../../classes';
import { Subject } from 'rxjs/Subject';
import { DOCUMENT } from '@angular/common';
@Component({
    selector: 'meepo-swiper-tags-view',
    templateUrl: './meepo-swiper-tags-view.html',
    styleUrls: ['./meepo-swiper-tags-view.scss']
})
export class MeepoSwiperTagsView implements OnInit, AfterViewInit {
    @Input() widget: MeepoSwiperTags = new MeepoSwiperTags();

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


