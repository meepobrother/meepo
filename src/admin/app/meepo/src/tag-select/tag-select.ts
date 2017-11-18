import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../core/api';

@Component({
    selector: 'tag-select',
    templateUrl: './tag-select.html',
    styleUrls: ['./tag-select.scss']
})
export class TagSelect implements OnInit {
    @Input() list: any[] = [];
    // 选中id
    @Input() selectId: any;
    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }

    _select(e: any){
        this.list.map((res: any)=>{
            res.active = false;
        });
        e.active = !e.active;
        this.onSelect.emit(e);
    }
}