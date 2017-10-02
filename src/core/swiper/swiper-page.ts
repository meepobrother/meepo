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
    ElementRef,
    Injectable
} from '@angular/core';

import { SwiperContainer } from './swiper-container';

import { DOCUMENT } from '@angular/common';
import { SwiperService } from './swiper.service';
@Injectable()
@Component({
    selector: 'swiper-page',
    templateUrl: './swiper-page.html',
    styleUrls: ['./swiper.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    preserveWhitespaces: false,
    providers: [
        SwiperService
    ]
})
export class SwiperPage implements OnInit {
    constructor() { }
    ngOnInit() { }
}
