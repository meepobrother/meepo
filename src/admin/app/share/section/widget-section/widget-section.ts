import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../../../core';

import {
    WIDGETS
} from '../../../design/components';

@Component({
    selector: 'widget-section',
    templateUrl: './widget-section.html',
    styleUrls: ['./widget-section.scss']
})
export class WidgetSection implements OnInit {
    widgets: any[] = [];
    forms: any[] = [];
    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() {
        this.api.mpost('app.getListAppWidgetsGroup', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.widgets = res.info;
            this.widgets.map(res => {
                res.widgets.map(widget=>{
                    if (WIDGETS[widget.type]) {
                        widget['__that'] = new WIDGETS[widget.type]();
                    }
                });
            });
            console.log('widgets', this.widgets);
        });
        this.api.mpost('app.getListAppForms', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.forms = res.info;
        });
    }

    selectWidget(item: any) {
        this.onSelect.emit(item);
    }
}