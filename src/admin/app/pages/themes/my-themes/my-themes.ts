import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { BindRightSource } from '../../../share/setting';
@Component({
    selector: 'my-themes',
    templateUrl: './my-themes.html',
    styleUrls: ['./my-themes.scss']
})
export class MyThemes implements OnInit {
    list: any[] = [];
    constructor(
        public router: Router,
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('app.update',{}).subscribe(res=>{});
        this.api.mpost('app.getListApp', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    delete(item: any) {
        this.api.mpost('app.deleteApp', item).subscribe(res => {
            this.getList();
        });
    }

    goDesign(item: any) {
        this.router.navigate(['/themes/design', item.id])
    }

    setting(item: any) {
        item['rights'] = item['rights'] || {};
        let dialogRef = this.dialog.open(BindRightSource, { data: item['rights'] });

        dialogRef.afterClosed().subscribe((res: any) => {
            if (res) {
                item['rights'] = res;
                console.log(item);
                // 自动保存
                this.api.mpost('app.editApp',item).subscribe(res=>{});
            };
        });
    }

    select(app: any,item: any){
        item.active = !item.active;
        this.api.mpost('app.editApp',app).subscribe(res=>{});
    }

    copy(item: any){

    }
}
