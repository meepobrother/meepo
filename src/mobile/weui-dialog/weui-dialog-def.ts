import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[dialogHeaderDef]',
})
export class DialogHeaderDef {
    constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({
    selector: '[dialogBodyDef]',
})
export class DialogBodyDef {
    constructor(public templateRef: TemplateRef<any>) { }
}

@Directive({
    selector: '[dialogFooterDef]',
})
export class DialogFooterDef {
    constructor(public templateRef: TemplateRef<any>) { }
}
