import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GoodsGroupAdd } from './goods-group-add';
import { ApiService } from '../../../core';
@Component({
    selector: 'goods-group',
    templateUrl: './goods-group.html',
    styleUrls: ['./goods-group.scss']
})
export class GoodsGroup implements OnInit {
    list: any[] = [];
    constructor(
        public dialog: MatDialog,
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('goods.update', {}).subscribe(res => { });
        this.api.mpost('goods.getListGoodsGroup', {}).subscribe((res: any) => {
            this.list = res.info;
        });
    }

    onUpdateDisplayorder(data: any) {
        this.api.mpost('goods.updateGoodsGroupDisplayorder', data).subscribe(res => {
            console.log(res);
        });
    }

    edit(data: any) {
        let { item, index } = data;
        let dialogRef = this.dialog.open(GoodsGroupAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res.title) {
                this.api.mpost('goods.editGoodsGroup', res).subscribe((data: any) => {
                    this.list[index] = data.info;
                });
            }
        });
    }

    delete(data: any) {
        let { item, index } = data;
        this.api.mpost('goods.deleteGoodsGroup', item).subscribe(res => {
            this.list.splice(index, 1);
        });
    }

    add() {
        let dialogRef = this.dialog.open(GoodsGroupAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res.title) {
                this.api.mpost('goods.editGoodsGroup', res).subscribe((data: any) => {
                    this.list.push(data.info);
                });
            }
        });
    }
    
}