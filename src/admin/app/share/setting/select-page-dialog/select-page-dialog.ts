import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService } from '../../../core';

@Component({
    selector: 'select-page-dialog',
    templateUrl: './select-page-dialog.html',
    styleUrls: ['./select-page-dialog.scss']
})
export class SelectPageDialog implements OnInit {
    pages: any[] = [];
    apps: any[] = [];
    app_id: any;
    uniacid: number = 0;
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
        this.getApps();
    }

    getApps() {
        this.apiService.mpost('app.getListApp').subscribe((res: any) => {
            this.apps = res.info;
        });
    }

    onSelectApp(app: any){
        this.app_id = app.id;
        this.uniacid = app.uniacid;
        this.getPages();
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
        console.log(page);
        const id = page.id;
        const url = './index.php?i='+this.uniacid+'&c=entry&do=design&m=imeepos_runner&id='+id;
        this.dialog.close(url);
    }

    cancel(){
        this.dialog.close();
    }
}