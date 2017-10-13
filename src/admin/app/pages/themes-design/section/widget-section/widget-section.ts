import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../core';
@Component({
    selector: 'widget-section',
    templateUrl: './widget-section.html',
    styleUrls: ['./widget-section.scss']
})
export class WidgetSection implements OnInit {
    widgets: any[] = [];
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() {
        this.api.mpost('app.getListAppWidgets', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.widgets = res.info;
        });
    }
}