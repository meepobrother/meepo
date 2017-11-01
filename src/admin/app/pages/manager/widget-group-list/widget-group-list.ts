import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { AddWidget } from '../add-widget';
import { AddWidgetGroup } from '../add-widget-group';


@Component({
    selector: 'widget-group-list',
    templateUrl: './widget-group-list.html',
    styleUrls: ['./widget-group-list.scss']
})
export class WidgetGroupList implements OnInit {
    widgets: any[] = [];

    loading: boolean = false;
    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getList();
        this.api.mpost('app.update', {}).subscribe(res => { });
    }

    getList() {
        this.api.mpost('app.getListAppWidgetsGroup', { page: 1, psize: 30 }, 'imeepos_runner', true).subscribe((res: any) => {
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

    addWidgetGroup(){
        const dialogRef = this.dialog.open(AddWidgetGroup);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                if(res['title']){
                    if(!this.loading){
                        this.loading = true;
                        this.api.mpost('app.eidtAppWidgetsGroup', res).subscribe(res => {
                            this.getList();  
                            this.loading = false;      
                        });
                    }
                }
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
        console.log(item);
        this.api.mpost('app.deleteAppWidgetsGroup', item).subscribe(res => {
            this.getList();
        });
    }
}
