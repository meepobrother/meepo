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
    videos: any[] = [
        {
            title: '跑腿lesson1-v20登陆步骤',
            src: 'https://meepo.com.cn/meepo/video/001.mp4'
        }
    ];
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
