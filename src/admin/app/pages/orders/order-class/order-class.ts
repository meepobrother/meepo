import { Component, OnInit } from '@angular/core';
import { OrderClassAdd } from './order-class-add';
import { MatDialog } from '@angular/material';
import { OrderClassAddService } from './order-class-add.service';
import { ApiService } from '../../../core';
@Component({
    selector: 'order-class',
    templateUrl: './order-class.html',
    styleUrls: ['./order-class.scss']
})
export class OrderClass implements OnInit {
    list: OrderClassItem[] = [];
    constructor(
        public dialog: MatDialog,
        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList(1, 30);
    }

    getList(page: number, psize: number) {
        this.api.mpost('orders.getListOrderClass', { page: page, psize: psize }).subscribe((res: any) => {
            this.list = res.info;
        });
    }
    // 添加
    add() {
        const dialogRef = this.dialog.open(OrderClassAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res.title) {
                this.api.mpost('orders.addOrderClass', res).subscribe(item => {
                    this.list.unshift(item);
                });
            }
        });
    }
    // 编辑
    edit(item: any, index: number) {
        const dialogRef = this.dialog.open(OrderClassAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res.title) {
                this.list[index] = res;
                this.api.mpost('orders.addOrderClass', res).subscribe(item => { });
            }
        });
    }
    // 更新状态
    updateStatus(res: any, index: number) {
        res.status = res.status == 1 ? 0 : 1;
        this.api.mpost('orders.addOrderClass', res).subscribe(item => { });
    }

    delete(item: any, index: number) {
        this.api.mpost('orders.deleteOrderClass', item).subscribe(res => {
            this.list.splice(index, 1);
        });
    }
}

export interface OrderClassItem {
    title?: string;
    code?: string;
    id?: number;
    status?: number;
    uniacid?: number;
}
