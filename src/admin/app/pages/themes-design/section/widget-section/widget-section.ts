import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../../core';
@Component({
    selector: 'widget-section',
    templateUrl: './widget-section.html',
    styleUrls: ['./widget-section.scss']
})
export class WidgetSection implements OnInit {
    widgets: any[] = [];
    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() {
        this.api.mpost('app.getListAppWidgets', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.widgets = res.info;
        });
    }

    selectWidget(item: any){
        this.onSelect.emit(item);
    }
}