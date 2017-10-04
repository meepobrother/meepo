import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'dialog-header',
    template: `
        <ng-content></ng-content>
    `
})
export class DialogHeaderContainer implements OnInit {
    @HostBinding('class.weui-dialog__hd') _hd: boolean = true;
    @HostBinding('style.display') _display: string = 'block';

    constructor() { }

    ngOnInit() { }
}

@Component({
    selector: 'dialog-body',
    template: `
        <ng-content></ng-content>
    `
})
export class DialogBodyContainer implements OnInit {
    @HostBinding('class.weui-dialog__bd') _bd: boolean = true;
    @HostBinding('style.display') _display: string = 'block';

    constructor() { }

    ngOnInit() { }
}

@Component({
    selector: 'dialog-footer',
    template: `
        <ng-content></ng-content>
    `
})
export class DialogFooterContainer implements OnInit {
    @HostBinding('class.weui-dialog__ft') _ft: boolean = true;
    constructor() { }

    ngOnInit() { }
}

