import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { AddWidget } from '../add-widget';

@Component({
    selector: 'widget-list',
    templateUrl: './widget-list.html',
    styleUrls: ['./widget-list.scss']
})
export class WidgetList implements OnInit {
    widgets: any[] = [];
    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getList();
        this.api.mpost('app.update', {}).subscribe(res => { });
    }

    getList() {
        this.api.mpost('app.getListAppWidgets', { page: 1, psize: 30 }, 'imeepos_runner', true).subscribe((res: any) => {
            this.widgets = res.info;
        });
    }

    addWidget() {
        const dialogRef = this.dialog.open(AddWidget);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.getList();
            }
        });
    }

    editWidget(item: any) {
        const dialogRef = this.dialog.open(AddWidget, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.getList();
            }
        });
    }

    deleteWidget(item: any) {
        this.api.mpost('app.deleteAppWidgets', item).subscribe(res => {
            this.getList();
        });
    }
}
