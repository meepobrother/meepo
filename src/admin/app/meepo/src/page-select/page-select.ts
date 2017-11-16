import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ApiService, SysinfoService } from '../../../core/api';

@Component({
    selector: 'page-select',
    templateUrl: './page-select.html',
    styleUrls: ['./page-select.scss']
})
export class PageSelect implements OnInit {
    pages: any[] = [];
    apps: any[] = [];
    app_id: any;
    uniacid: number = 0;
    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public apiService: ApiService,
        public sysinfo: SysinfoService
    ) {
        // this.uniacid = this.apiService.sysinfo.uniacid;
    }

    ngOnInit() {
        this.getApps();
    }

    getApps() {
        this.apiService.mpost('app.getListApp').subscribe((res: any) => {
            this.apps = res.info;
        });
    }

    // 选择布局
    onSelectPage(page: any) {
        const url = './index.php?i='+this.sysinfo.getUniacid()+'&c=entry&do=design&m=imeepos_runner&pid='+page;
        this.dialog.close(url);
    }

    cancel(){
        this.dialog.close();
    }
}