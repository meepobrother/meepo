import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../core/api';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'carfiles-select',
    templateUrl: './carfiles-select.html',
    styleUrls: ['./carfiles-select.scss']
})
export class CarfilesSelect implements OnInit {
    list: any[] = [];

    selects: any[] = [];
    constructor(
        public api: ApiService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('carfiles.search', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    close() {
        this.dialog.close();
    }

    select(item: any) {
        // 如果已选择
        this.dialog.close(item);
    }
}
