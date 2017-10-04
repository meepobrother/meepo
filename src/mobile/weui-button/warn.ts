
import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[weui-btn][warn]',
})
export class WeuiButtonWarn {
    // weui-btn_warn
    @HostBinding('class.weui-btn_warn') _warn: boolean = true;
}
