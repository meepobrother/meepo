import {
    Component, OnInit,
    Input, ElementRef,
    HostListener, Directive,
    HostBinding
} from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { MeepoFormFieldControl } from './form-field-control';
import uuid from 'uuid';

@Directive({
    selector: '[meepoInput]'
})
export class MeepoInput implements MeepoFormFieldControl<any> {
    @HostBinding('attr.id') _id: string = uuid();
    // @HostBinding('class.form-control') _formControl: boolean = true;
    
    @Input() value: string;
    @Input() placeholder: string;
    
    focused: boolean = false;
    readonly: boolean = false;
    @Input()
    get id() {
        return this._id;
    }
    set id(val: string) {
        this._id = val;
        this._id = this._id || uuid();
    }

    stateChanges = new Subject<void>();

    @HostListener('focus', ['$event'])
    onFocus() {
        this._focusChanged(true);
    }

    @HostListener('blur', ['$event'])
    onBlur() {
        this._focusChanged(false);
    }

    constructor(
        protected _elementRef: ElementRef,
    ) { }

    _focusChanged(isFocused: boolean) {
        if (isFocused !== this.focused) {
            this.focused = isFocused;
            this.stateChanges.next();
        }
    }
}