import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[weui-btn][plain-default]',
})
export class WeuiButtonPlainDefault {
    @HostBinding('class.weui-btn_plain-default') _default: boolean = true;
}

@Directive({
    selector: '[weui-btn][plain-primary]',
})
export class WeuiButtonPlainPrimary {
    @HostBinding('class.weui-btn_plain-primary') _default: boolean = true;
}

@Directive({
    selector: '[weui-btn][plain-disabled]',
})
export class WeuiButtonPlainDisabled {
    @HostBinding('class.weui-btn_plain-disabled') _default: boolean = true;
}
