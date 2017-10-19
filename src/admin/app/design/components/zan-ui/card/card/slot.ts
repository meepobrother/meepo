import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
    selector: '[slot]',
})
export class SlotDirective { 
    @Input() slot: SlotTypes = 'title';
    constructor(
        public templateRef: TemplateRef<any>
    ){}
}


export type SlotTypes = 'title'
    | 'desc'
    | 'tags'
    | 'thumb'
    | 'footer';
