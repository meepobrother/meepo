import { Component, OnInit } from '@angular/core';
import { ShopsListService } from './shops-list.service';
import { MatDialog } from '@angular/material';
import { ShopsListAdd } from './shops-list-add';
@Component({
    selector: 'shops-list',
    templateUrl: './shops-list.html',
    styleUrls: ['./shops-list.scss']
})
export class ShopsList implements OnInit {
    constructor(
        public api: ShopsListService,
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    add() {
        const dialogRef = this.dialog.open(ShopsListAdd);
    }

    edit(item: any) {
        const dialogRef = this.dialog.open(ShopsListAdd, { data: item });
    }
}