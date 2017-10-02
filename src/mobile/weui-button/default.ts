import {
    Directive,
    HostBinding
} from '@angular/core';

@Directive({
    selector: '[weui-btn][default]',
})
export class WeuiButtonDefault {
    @HostBinding('class.weui-btn_default') _default: boolean = true;
}
