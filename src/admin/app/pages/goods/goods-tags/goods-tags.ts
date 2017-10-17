import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GoodsTagsAdd } from './goods-tags-add';
import { ApiService } from '../../../core';
@Component({
    selector: 'goods-tags',
    templateUrl: './goods-tags.html',
    styleUrls: ['./goods-tags.scss']
})
export class GoodsTags implements OnInit {
    list: any[] = [];
    constructor(
        public dialog: MatDialog,
        public api: ApiService
    ) { }

    ngOnInit() { 
        this.getList();
    }

    getList() {
        this.api.mpost('goods.getListGoodsTags', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    add() {
        const dialogRef = this.dialog.open(GoodsTagsAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('goods.addGoodsTags', res).subscribe((res: any) => {
                    this.list.unshift(res.info);
                });
            }
        });
    }

    edit(item: any){
        const dialogRef = this.dialog.open(GoodsTagsAdd,{ data: item});
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.mpost('goods.editGoodsTags', res).subscribe((res: any) => {
                    this.getList();
                });
            }
        });
    }
}