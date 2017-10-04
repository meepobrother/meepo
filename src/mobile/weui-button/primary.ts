import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[weui-btn][primary]',
})
export class WeuiButtonPrimary {
    // weui-btn_primary
    @HostBinding('class.weui-btn_primary') _primary: boolean = true;
}
