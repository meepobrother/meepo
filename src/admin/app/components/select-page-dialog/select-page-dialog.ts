import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../../core';

@Component({
    selector: 'select-page-dialog',
    templateUrl: './select-page-dialog.html',
    styleUrls: ['./select-page-dialog.scss']
})
export class SelectPageDialog implements OnInit {
    pages: any[] = [];
    app_id: any;
    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public apiService: ApiService
    ) {
        this.dialog.afterOpen().subscribe(() => {
            let { app_id } = this.data;
            this.app_id = app_id;
            this.getPages();
        });
    }

    ngOnInit() {
        
    }

    getPages() {
        this.apiService.mpost('app.getListAppCatalogPage', { app_id: this.app_id }).subscribe((res: any) => {
            this.pages = res.info;
        });
    }

    cancelPageDialog() {
        this.dialog.close();
    }

    // 选择布局
    onSelectPage(page: any) {
        this.dialog.close(page);
    }
}