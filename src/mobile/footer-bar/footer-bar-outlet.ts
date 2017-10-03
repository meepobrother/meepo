import { Directive, TemplateRef } from '@angular/core';

@Directive({
    selector: '[footerBarOutlet]',
})
export class FooterBarOutlet {
    constructor(
        public templateRef: TemplateRef<any>
    ) { }
}
