import { Component, OnInit, forwardRef, Output, EventEmitter } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder } from '@angular/forms';
@Component({
    selector: 'icon-select',
    templateUrl: './icon-select.html',
    styleUrls: ['./icon-select.scss']
})
export class IconSelect implements OnInit, ControlValueAccessor {
    form: FormGroup;
    @Output() onChange: EventEmitter<any> = new EventEmitter();
    onChangeFn: (_: any) => {};
    constructor(
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({
            icon: ['']
        });
        this.form.get('icon').valueChanges.subscribe(res => {
            this.onChangeFn && this.onChangeFn(res);
            this.onChange.emit(res);
        });
    }

    ngOnInit() { }

    writeValue(obj: any): void {
        this.form.get('icon').setValue(obj);
    }
    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }
    registerOnTouched(): void {

    }
}