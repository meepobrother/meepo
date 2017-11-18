import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../../../core/api';
@Component({
    selector: 'multi-select-item',
    templateUrl: './multi-select-item.html',
    styleUrls: ['./multi-select-item.scss']
})
export class MultiSelectItem implements OnInit {
    @Input() items: any[] = [];
    @Input() selectIndex: number;

    @Input()
    set selectId(val: number) {
        this.selectIndex = val;
        this._onSelect();
    }

    get selectId(){
        return this.selectIndex;
    }
    
    @Input() select: any = {};

    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    hasChildren: boolean = false;
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }

    _onSelect() {
        this.items.map((res: any) => {
            if (res.id == this.selectIndex) {
                this.select = res;
            }
        });
        if (this.select && this.select['children']) {
            this.hasChildren = true;
        } else {
            this.hasChildren = false;
        }
        this.onSelect.emit(this.select);
    }

    _onSelectItem(e: any){
        this.onSelect.emit(e);
    }
}