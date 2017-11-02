import { Component, OnInit, Input } from '@angular/core';
import { MeepoFilter } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { BindDataSource, SelectPageDialog } from '../../../../../share/setting';
import { WidgetService } from '../../../../../share/services';
@Component({
    selector: 'meepo-filter-setting',
    templateUrl: './meepo-filter-setting.html',
    styleUrls: ['./meepo-filter-setting.scss']
})
export class MeepoFilterSetting implements OnInit {
    @Input() widget: MeepoFilter = new MeepoFilter();
    constructor(
        public dialog: MatDialog,
        public widget$: WidgetService
    ) { }

    ngOnInit() { }

    addItem() {
        const item = {
            title: '全部'
        }
        this.widget.children.push(item);
    }

    selectDataSource(item: any) {
        const dialogRef = this.dialog.open(BindDataSource);
    }

    selectPageSource(item: any) {
        const dialogRef = this.dialog.open(SelectPageDialog, { data: { app_id: this.widget$.getAppId() } });
        dialogRef.afterClosed().subscribe(res => {
            item.link = res.id;
            item.title = res.title;
        });
    }
}