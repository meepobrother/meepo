import {
    Directive,
    HostBinding,
    Input,
    Optional,
    SkipSelf,
    ElementRef,
    OnInit,
    AfterContentInit
} from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { WeuiPickerGroup } from './picker-group';

@Directive({
    selector: 'picker-item',
})
export class WeuiPickerItem implements AfterContentInit {
    @HostBinding('class.weui-picker__item') _item: boolean = true;
    @HostBinding('style.display') _display: string = 'block';
    height: number = 0;
    @Input() active: boolean = false;
    @Input() disabled: boolean = false;

    @Input() item: any;

    constructor(
        public ele: ElementRef
    ) {

    }
    ngAfterContentInit() {
        this.height = this.ele.nativeElement.clientHeight;
    }
}

@Directive({
    selector: 'picker-item[disabled]',
})
export class WeuiPickerItemDisabled {
    @HostBinding('class.weui-picker__item_disabled') _disable = true;
    height: Subject<number> = new Subject();
    constructor(
        public ele: ElementRef
    ) { }
}
