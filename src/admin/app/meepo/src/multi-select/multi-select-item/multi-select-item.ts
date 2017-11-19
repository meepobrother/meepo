import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ApiService } from '../../../../core/api';
import { MultiSelectService } from '../multi-select.service';

@Component({
    selector: 'multi-select-item',
    templateUrl: './multi-select-item.html',
    styleUrls: ['./multi-select-item.scss']
})
export class MultiSelectItem implements OnInit {
    @Input() items: any[] = [];
    selectIndex: any;
    @Input() select: any = {};

    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    @Output() onSelectChildren: EventEmitter<any> = new EventEmitter();

    hasChildren: boolean = false;

    constructor(
        public api: ApiService,
        public multiSelect: MultiSelectService
    ) { }

    ngOnInit() { }
    // 选择的时候 找到所有上级链条
    _onSelect(index: number) {
        this.selectIndex = index;
        if (this.selectIndex) {
            if (this.items) {
                this.items.map((res: any) => {
                    res.active = false;
                    if (res.id == this.selectIndex) {
                        res.active = true;
                        this.select = res;
                    }
                });
                if (this.select['children']) {
                    this.hasChildren = true;
                } else {
                    this.hasChildren = false;
                }
                this.onSelect.emit(this.select);
            }
        }
    }

    _onSelectItem(e: any) {
        this.onSelect.emit(e);
    }
}