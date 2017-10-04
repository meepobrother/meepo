import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: 'weui-flex',
})
export class WeuiFlex {
    @HostBinding('class.weui-flex') _flex: boolean = true;
}

@Directive({
    selector: 'weui-flex-item',
})
export class WeuiFlexItem {
    @HostBinding('class.weui-flex__item') _flex_item: boolean = true;
}

