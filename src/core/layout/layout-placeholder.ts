import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[layout-body-placeholder]',
})
export class LayoutBody {
    constructor(
        public viewContainerRef: ViewContainerRef
    ) { }
}

@Directive({
    selector: '[layout-header-placeholder]',
})
export class LayoutHeader {
    constructor(
        public viewContainerRef: ViewContainerRef
    ) { }
}

@Directive({
    selector: '[layout-footer-placeholder]',
})
export class LayoutFooter {
    constructor(
        public viewContainerRef: ViewContainerRef
    ) { }
}


@Directive({
    selector: '[layout-left-placeholder]',
})
export class LayoutLeft {
    constructor(
        public viewContainerRef: ViewContainerRef
    ) { }
}


@Directive({
    selector: '[layout-right-placeholder]',
})
export class LayoutRight {
    constructor(
        public viewContainerRef: ViewContainerRef
    ) { }
}

