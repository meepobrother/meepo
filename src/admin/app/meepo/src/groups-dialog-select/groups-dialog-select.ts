import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../../../core/api';
@Component({
    selector: 'groups-dialog-select',
    templateUrl: './groups-dialog-select.html',
    styleUrls: ['./groups-dialog-select.scss']
})
export class GroupsDialogSelect implements OnInit {
    status: any[] = [];

    selects: any[] = [];

    groups: any[] = [];

    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public api: ApiService
    ) {
        this.dialog.afterOpen().subscribe(res => {
            let { selects } = this.data;
            if (selects) { }
        });
    }

    ngOnInit() {
        this.getCatalogs();
    }

    getCatalogs() {
        this.api.mpost('group.getGroupsList', {}).subscribe((res: any) => {
            this.groups = res.info;
        });
    }

    close() {
        this.dialog.close();
    }

    save() {
        this.dialog.close(this.selects);
    }

    selectStatus(item: any) {
        if (item.active) {
            let index = this.selects.indexOf(item);
            this.selects.splice(index, 1);
        } else {
            this.selects.push(item);
        }
        item.active = !item.active;
    }
}
