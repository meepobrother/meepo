import { Directive, HostBinding, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[dialogHdPlaceholder]'
})
export class DialogHdPlaceholder {
    constructor(public viewContainer: ViewContainerRef) { }
}

@Directive({
    selector: '[dialogFtPlaceholder]'
})
export class DialogFtPlaceholder {
    constructor(public viewContainer: ViewContainerRef) { }
}

@Directive({
    selector: '[dialogBdPlaceholder]'
})
export class DialogBdPlaceholder {
    constructor(public viewContainer: ViewContainerRef) { }
}
