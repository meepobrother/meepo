import {
    Directive,
    HostBinding
} from '@angular/core';

@Directive({
    selector: 'picker-hd',
})
export class WeuiPickerHd {
    @HostBinding('class.weui-picker__hd') _hd: boolean = true;
}


@Directive({
    selector: 'picker-action',
})
export class WeuiPickerAction {
    @HostBinding('class.weui-picker__action') _action: boolean = true;
}


@Directive({
    selector: 'picker-action[left]',
})
export class WeuiPickerActionLeft {
    @HostBinding('class.weui-picker__action') _action: boolean = true;
}

@Directive({
    selector: 'picker-action[right]',
})
export class WeuiPickerActionRight {
    @HostBinding('class.weui-picker__action') _action: boolean = true;
}

