import { Component, OnInit, Output, EventEmitter, forwardRef } from '@angular/core';
import { ShopsTagsService } from '../../shops-tags';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export const EXE_COUNTER_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ShopsTagsSelect),
    multi: true
};

@Component({
    selector: 'shops-tags-select',
    templateUrl: './shops-tags-select.html',
    styleUrls: ['./shops-tags-select.scss'],
    providers: [
        EXE_COUNTER_VALUE_ACCESSOR
    ]
})
export class ShopsTagsSelect implements OnInit, ControlValueAccessor {
    selects: Map<number, any> = new Map();
    onChange: (_: any) => {};
    onTouched: (_: any) => {};

    // @Output() onSelect: EventEmitter<any> = new EventEmitter();
    constructor(
        public api: ShopsTagsService
    ) { }

    writeValue(obj: any[]): void {
        if (obj) {
            obj.map(o => {
                this.selects.set(o.id, o);
            });
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

    ngOnInit() {
        this.api.getList();
    }

    select(item: any) {
        const selected = this.selects.get(item.id);
        if (selected) {
            this.selects.delete(item.id);
        } else {
            this.selects.set(item.id, item);
        }
        const results = [];
        this.selects.forEach(r => { 
            results.push(r);
        });
        console.log(results);
        this.onChange(results);
    }
}