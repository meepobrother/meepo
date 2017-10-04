import { Component, TemplateRef, NgModuleFactory, Directive } from '@angular/core';

const TEMPLATE = `
    <ng-content></ng-content>
`;
@Component({
    selector: 'layout-header',
    template: `
        <ng-content select="header-left"></ng-content>
        <div class="center">
            <ng-content select="header-title"></ng-content>
         </div>
        <ng-content select="header-right"></ng-content>
    `
})
export class LayoutHeaderRef {
    constructor(
    ) { }
}


@Directive({
    selector: 'header-left'
})
export class LayoutHeaderLeftRef {
    constructor(
    ) { }
}

@Directive({
    selector: 'header-title'
})
export class LayoutHeaderTitleRef {
    constructor(
    ) { }
}



@Directive({
    selector: 'header-right'
})
export class LayoutHeaderRightRef {
    constructor(
    ) { }
}



@Component({
    selector: 'layout-footer',
    template: TEMPLATE
})
export class LayoutFooterRef {
    constructor(
    ) { }
}


@Component({
    selector: 'layout-left',
    template: TEMPLATE
})
export class LayoutLeftRef {
    constructor(
    ) { }
}


@Component({
    selector: 'layout-right',
    template: TEMPLATE
})
export class LayoutRightRef {
    constructor() { }
}

@Component({
    selector: 'layout-body',
    template: TEMPLATE
})
export class LayoutBodyRef {
    constructor() { }
}
