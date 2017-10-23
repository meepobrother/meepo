import { Component, OnInit, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

export const EXE_COUNTER_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GoodTagSelect),
    multi: true
};

import { ApiService } from '../../core/api';

@Component({
    selector: 'good-tag-select',
    templateUrl: './good-tag-select.html',
    styleUrls: ['./good-tag-select.scss'],
    providers: [
        EXE_COUNTER_VALUE_ACCESSOR
    ]
})
export class GoodTagSelect implements OnInit, ControlValueAccessor {
    selects: Map<number, any> = new Map();

    list: any[] = [];
    onChange: (_: any) => {};
    onTouched: (_: any) => {};
    selectionModel: any;

    constructor(
        public api: ApiService
    ) { 
        this.selectionModel = new SelectionModel(true, [], true);
        this.selectionModel.onChange.subscribe(res => {
            this.onChange(this.selectionModel.selected);
        });
    }

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
        this.getList();
    }

    getList(){
        this.api.mpost('goods.getListGoodsTags',{}).subscribe((res: any)=>{
            this.list = res.info;
        });
    }

    select(item: any) {
        this.selectionModel.toggle(item);
    }
}