import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[weui-btn][inline]',
})
export class WeuiButtonInline {
    @HostBinding('class.weui-btn_inline') _inline: boolean = true;
}
