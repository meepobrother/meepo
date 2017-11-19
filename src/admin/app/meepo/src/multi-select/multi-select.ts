import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../core/api';
import { MultiSelectService } from './multi-select.service';

@Component({
    selector: 'multi-select',
    templateUrl: './multi-select.html',
    styleUrls: ['./multi-select.scss']
})
export class MultiSelect implements OnInit {
    @Input() list: any[] = [];
    // 选中id
    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    constructor(
        public api: ApiService,
        public multiSelect: MultiSelectService
    ) { }

    ngOnInit() {}

    _onSelect(e: any) {
        this.onSelect.emit(e);
    }

    setSelected(item: any){

    }
}