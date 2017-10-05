import { Component, OnInit } from '@angular/core';
import { OrderClassAdd } from './order-class-add';
import { MdDialog } from '@angular/material';

@Component({
    selector: 'order-class',
    templateUrl: './order-class.html',
    styleUrls: ['./order-class.scss']
})
export class OrderClass implements OnInit {
    list: OrderClassItem[] = [];
    constructor(
        public dialog: MdDialog
    ) { }

    ngOnInit() { }

    add() {
        const dialogRef = this.dialog.open(OrderClassAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.list.unshift(res);
            }
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
