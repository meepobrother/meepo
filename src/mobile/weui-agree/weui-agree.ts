import { Component, OnInit, HostBinding, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const EXE_COUNTER_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => WeuiAgree),
    multi: true
};

@Component({
    selector: 'label[weui-agree]',
    template: `
        <input [id]="_id" type="checkbox" (click)="agree($event.target.checked)" class="weui-agree__checkbox">
        <span class="weui-agree__text">
            <ng-content></ng-content>
        </span>
    `,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => WeuiAgree),
            multi: true
        }
    ]
})
export class WeuiAgree implements OnInit, ControlValueAccessor {
    model: any;
    onChange: (_: any) => {};
    onTouched: (_: any) => {};

    @HostBinding('class.weui-agree') _agree: boolean = true;
    @HostBinding('attr.id') _id: string = new Date().getTime() + '';

    constructor() { }
    ngOnInit() { }

    writeValue(obj: any): void {
        if (obj) {
            this.model = obj;
        }
    }
    registerOnChange(fn: any): void {
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled: boolean): void {
        console.log(isDisabled);
    }
    agree(e: any) {
        this.onChange(e);
    }
}
