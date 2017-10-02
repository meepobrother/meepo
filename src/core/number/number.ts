import { Component, OnInit, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'number',
    templateUrl: './number.html',
    styleUrls: ['./number.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NumberComponent),
            multi: true
        }
    ]
})
export class NumberComponent implements OnInit, ControlValueAccessor {
    @Input() num: number = 1;
    @Input() min: number = 1;
    @Input() max: number = 20;

    onChangeFn: (_: any) => {};
    @Output() onChange: EventEmitter<any> = new EventEmitter();
    constructor() { }
    ngOnInit() { }
    add() {
        if (this.num < this.max) {
            this.num++;
            if (this.onChangeFn) {
                this.onChangeFn(this.num);
            } else {
                this.onChange.emit(this.num);
            }
        }
    }
    del() {
        if (this.num > this.min) {
            this.num--;
            if (this.onChangeFn) {
                this.onChangeFn(this.num);
            } else {
                this.onChange.emit(this.num);
            }
        }
    }
    writeValue(obj: any): void {
        this.num = obj;
    }
    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }
    registerOnTouched(): void {

    }
    setDisabledState?(): void {

    }
}

