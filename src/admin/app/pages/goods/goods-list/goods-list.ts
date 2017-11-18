import { Component, OnInit } from '@angular/core';
import { GoodsListAdd } from './goods-list-add';
import { MatDialog } from '@angular/material';
import { ApiService } from '../../../core';
@Component({
    selector: 'goods-list',
    templateUrl: './goods-list.html',
    styleUrls: ['./goods-list.scss']
})
export class GoodsList implements OnInit {
    list: any[] = [];
    constructor(
        public dialog: MatDialog,
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('goods.update',{}).subscribe(res=>{});
        this.api.mpost('goods.getListGood', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    add() {
        const dialogRef = this.dialog.open(GoodsListAdd);
        dialogRef.afterClosed().subscribe((res: any) => {
            if (res && res['title']) {
                this.api.mpost('goods.addGood', res).subscribe((data: any) => {
                    this.list.unshift(data.info);
                });
            }
        });
    }

    editGoods(item: any, index: number) {
        const dialogRef = this.dialog.open(GoodsListAdd, { data: item });
        dialogRef.afterClosed().subscribe((res: any) => {
            if (res && res['title']) {
                this.api.mpost('goods.addGood', res).subscribe((data: any) => {
                    this.list[index] = data.info;
                });
            }
        });
    }

    deleteGoods(item: any, index: number) {
        this.api.mpost('goods.deleteGood', item).subscribe(res => {
            this.list.splice(index, 1);
        })
    }
}