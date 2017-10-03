import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[weui-btn]',
})
export class WeuiButton {
    @HostBinding('class.weui-btn') _button: boolean = true;
}
