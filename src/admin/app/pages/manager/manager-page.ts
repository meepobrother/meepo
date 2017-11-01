import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../core';
import { MatDialog } from '@angular/material';
import { AddWidget } from './add-widget';
@Component({
    selector: 'manager-page',
    templateUrl: './manager-page.html',
    styleUrls: ['./manager-page.scss']
})
export class ManagerPage implements OnInit {
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
}
