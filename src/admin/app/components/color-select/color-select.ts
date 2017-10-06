import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
    selector: 'color-select',
    templateUrl: './color-select.html',
    styleUrls: ['./color-select.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ColorSelect),
            multi: true
        }
    ]
})
export class ColorSelect implements OnInit, ControlValueAccessor {
    colors: string[] = [
        "gray", "red", "pink", "grape", "violet", "indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "orange"
    ];
    grids: string[] = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    ];
    @Output() onSelect: EventEmitter<string> = new EventEmitter();
    onChangeFn: (_: any) => {};
    constructor() { }

    ngOnInit() { }

    onClick(e: any) {
        const target = e.target;
        const color = this.getStyle(target).backgroundColor;
        this.onSelect.emit(color);
        this.onChangeFn && this.onChangeFn(color);
    }

    getStyle(ele) {
        var style = null;
        if (window.getComputedStyle) {
            style = window.getComputedStyle(ele, null);
        } else {
            style = ele.currentStyle;
        }
        return style;
    }

    writeValue(obj: any): void {

    }
    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }
    registerOnTouched(): void {

    }
}