import { Component, OnInit, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SelectionModel } from '@angular/cdk/collections';

export const EXE_COUNTER_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ShopTagSelect),
    multi: true
};

import { ApiService } from '../../core/api';

@Component({
    selector: 'shop-tag-select',
    templateUrl: './shop-tag-select.html',
    styleUrls: ['./shop-tag-select.scss'],
    providers: [
        EXE_COUNTER_VALUE_ACCESSOR
    ]
})
export class ShopTagSelect implements OnInit, ControlValueAccessor {
    selects: Map<number, any> = new Map();

    list: any[] = [];
    onChange: (_: any) => {};
    onTouched: (_: any) => {};

    selectionModel: any;

    // @Output() onSelect: EventEmitter<any> = new EventEmitter();
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
        this.api.mpost('shops.getListShopsTags',{}).subscribe((res: any)=>{
            this.list = res.info;
        });
    }

    select(item: any) {
        this.selectionModel.toggle(item);
    }
}