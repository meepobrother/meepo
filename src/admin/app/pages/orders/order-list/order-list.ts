import { Component, OnInit } from '@angular/core';
import { OrderListAdd } from './order-list-add';
import { MdDialog } from '@angular/material';

@Component({
    selector: 'order-list',
    templateUrl: './order-list.html',
    styleUrls: ['./order-list.scss']
})
export class OrderList implements OnInit {
    list: any[] = [];
    constructor(
        public dialog: MdDialog
    ) { }

    ngOnInit() { }

    add() {
        const dialogRef = this.dialog.open(OrderListAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.list.unshift(res);
            }
        });
    }
}