import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
@Component({
    selector: 'editor',
    templateUrl: './editor.html',
    styleUrls: ['./editor.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => EditorComponent),
            multi: true
        }
    ]
})
export class EditorComponent implements OnInit, ControlValueAccessor {
    onChangeFn: (_: any) => {};
    
    constructor() { }

    ngOnInit() { }

    writeValue(obj: any): void {
        
    }
    
    registerOnChange(fn: any): void {
        this.onChangeFn = fn;
    }
    registerOnTouched(): void {

    }
}