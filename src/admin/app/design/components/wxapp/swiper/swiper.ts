import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Component({
    selector: 'swiper',
    templateUrl: './swiper.html',
    styleUrls: ['./swiper.scss']
})
export class Swiper implements OnInit {
    @Input() widget: SwiperDefault = new SwiperDefault();
    constructor() { }

    ngOnInit() { }
}

export class SwiperDefault{
    'indicator-dots': boolean = false;
    'indicator-color': string = 'rgba(0, 0, 0, .3)';
    'indicator-active-color': string = '#000000';
    autoplay: boolean = false;
    current: number = 0;
    interval: number = 5000;
    duration: number = 500;
    circular: boolean = false;
    vertical: boolean = false;
    bindchange: Subject<any> = new Subject();
}