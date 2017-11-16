import { Component, OnInit, Input } from '@angular/core';
import { HmMarqueeDefault } from '../../../../classes';

@Component({
    selector: 'hm-marquee-setting',
    templateUrl: './hm-marquee-setting.html',
    styleUrls: ['./hm-marquee-setting.scss']
})
export class HmMarqueeSetting implements OnInit {
    @Input() widget: HmMarqueeDefault = new HmMarqueeDefault();
    constructor() { }

    ngOnInit() { }

    onHeightChange(e: any){
        console.log(e);
        this.widget.containerStyle['height'] = e;
        this.widget.containerStyle['line-height'] = e;
    }
}
