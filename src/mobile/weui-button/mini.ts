import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[weui-btn][mini]',
})
export class WeuiButtonMini {
    @HostBinding('class.weui-btn_mini') _mini: boolean = true;
}
