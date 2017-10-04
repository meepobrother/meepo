import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[quickItemOutlet]',
})
export class QuickItemOutlet {
    constructor(
        public templateRef: TemplateRef<any>
    ) { }
}
