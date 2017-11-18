import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../core/api';
@Component({
    selector: 'multi-select',
    templateUrl: './multi-select.html',
    styleUrls: ['./multi-select.scss']
})
export class MultiSelect implements OnInit {
    @Input() list: any[] = [];
    // 选中id
    @Input() selectId: any;
    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }

    _onSelect(e: any){
        this.onSelect.emit(e);
    }
}