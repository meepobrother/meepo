import { Component, OnInit, Directive, HostBinding } from '@angular/core';

@Component({
    selector: 'weui-msg',
    template: `
        <ng-content select="[icon-area]"></ng-content>
        <ng-content select="[text-area]"></ng-content>
        <ng-content select="[opr-area]"></ng-content>
        <ng-content select="[extra-area]"></ng-content>
        <ng-content></ng-content>
    `
})
export class WeuiMsg implements OnInit {
    @HostBinding('class.weui-msg') _msg: boolean = true;
    constructor() { }

    ngOnInit() { }
}


@Directive({
    selector: '[icon-area]',
})
export class WeuiMsgIconArea {
    @HostBinding('class.weui-msg__icon-area') _icon: boolean = true;
}

@Directive({
    selector: '[text-area]',
})
export class WeuiMsgTextArea {
    @HostBinding('class.weui-msg__text-area') _text: boolean = true;
}

@Directive({
    selector: '[opr-area]',
})
export class WeuiMsgOprArea {
    @HostBinding('class.weui-msg__opr-area') _opr: boolean = true;
}

@Directive({
    selector: '[extra-area]',
})
export class WeuiMsgExtraArea {
    @HostBinding('class.weui-msg__extra-area') _extra: boolean = true;
}


@Directive({
    selector: '[msg-title]',
})
export class WeuiMsgTitle {
    @HostBinding('class.weui-msg__title') _title: boolean = true;
}


@Directive({
    selector: '[msg-desc]',
})
export class WeuiMsgDesc {
    @HostBinding('class.weui-msg__desc') _tit_descle: boolean = true;
}

