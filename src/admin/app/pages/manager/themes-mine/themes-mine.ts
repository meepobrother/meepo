import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ThemesAdd } from '../themes-add';
import { Router } from '@angular/router';
import { ApiService } from '../../../core';

@Component({
    selector: 'themes-mine',
    templateUrl: './themes-mine.html',
    styleUrls: ['./themes-mine.scss']
})
export class ThemesMine implements OnInit {
    list: any[] = [];
    constructor(
        public dialog: MatDialog,
        public router: Router,
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('app.getListApp', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    edit(item: any) {
        const dialogRef = this.dialog.open(ThemesAdd, { data: item });
    }

    delete(item: any) {
        this.api.mpost('app.deleteApp', item).subscribe(res => {
            this.getList();
        });
    }

    goDesign(item: any) {
        this.router.navigate(['/themes/design', item.id], { queryParams: { manager: true } })
    }

    add() {
        const dialogRef = this.dialog.open(ThemesAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                // this.api.add(res);
                this.getList();
            }
        });
    }
}
