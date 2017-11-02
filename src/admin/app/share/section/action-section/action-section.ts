import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../core';
@Component({
    selector: 'action-section',
    templateUrl: './action-section.html',
    styleUrls: ['./action-section.scss']
})
export class ActionSection implements OnInit {
    widgets: any[] = [];
    forms: any[] = [];
    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() {
        this.api.mpost('app.getListAppAction', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.forms = res.info;
        });
    }

    selectWidget(item: any){
        console.log(item);
        this.onSelect.emit(item);
    }
}