import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[weui-btn][disabled]',
})
export class WeuiButtonDisabled {
    // btn_disabled
    @HostBinding('class.weui-btn_disabled') _disable: boolean = true;
}

