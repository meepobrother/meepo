import { Directive, HostBinding } from '@angular/core';

@Directive({
    selector: '[dialogBtn]',
})
export class DialogBtn {
    @HostBinding('class.weui-dialog__btn') _btn: boolean = true;
    // TODO
}

@Directive({
    selector: 'a[primary],button[primary]',
})
export class DialogBtnPrimary {
    @HostBinding('class.weui-dialog__btn') _btn: boolean = true;
    @HostBinding('class.weui-dialog__btn_primary') _primary: boolean = true;
    // TODO
}

@Directive({
    selector: 'a[default],button[default]',
})
export class DialogBtnDefault {
    @HostBinding('class.weui-dialog__btn') _btn: boolean = true;
    @HostBinding('class.weui-dialog__btn_default') _default: boolean = true;
    // TODO
}

@Directive({
    selector: '[dialogTitle]',
})
export class DialogTitle {
    @HostBinding('class.weui-dialog__title') _title: boolean = true;
    // TODO
}
