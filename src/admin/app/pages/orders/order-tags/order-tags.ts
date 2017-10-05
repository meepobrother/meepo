
import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { OrderTagsAdd } from './order-tags-add';
import { OrderTagsService } from './order-tags.service';

@Component({
    selector: 'order-tags',
    templateUrl: './order-tags.html',
    styleUrls: ['./order-tags.scss']
})
export class OrderTags implements OnInit {
    constructor(
        public dialog: MdDialog,
        public tags: OrderTagsService
    ) { }

    ngOnInit() {
        this.tags.getList(1, 30);
        this.tags.list.values
    }

    add() {
        const dialogRef = this.dialog.open(OrderTagsAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.tags.add(res);
            }
        });
    }

    edit(item: any) {
        const dialogRef = this.dialog.open(OrderTagsAdd, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.tags.edit(res);
            }
        });
    }
}