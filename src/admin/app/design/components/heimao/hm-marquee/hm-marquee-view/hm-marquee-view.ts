import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HmMarqueeDefault } from '../../../../classes';
@Component({
    selector: 'hm-marquee-view',
    templateUrl: './hm-marquee-view.html',
    styleUrls: ['./hm-marquee-view.scss']
})
export class HmMarqueeView implements OnInit {
    @Input() widget: HmMarqueeDefault = new HmMarqueeDefault();
    constructor() { }
    ngOnInit() { }
}
