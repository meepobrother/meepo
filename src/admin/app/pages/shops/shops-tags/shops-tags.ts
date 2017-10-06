import { Component, OnInit } from '@angular/core';
import { ShopsTagsService } from './shops-tags.service';
import { MdDialog } from '@angular/material';
import { ShopsTagsAdd } from './shops-tags-add';
@Component({
    selector: 'shops-tags',
    templateUrl: './shops-tags.html',
    styleUrls: ['./shops-tags.scss']
})
export class ShopsTags implements OnInit {
    constructor(
        public api: ShopsTagsService,
        public dialog: MdDialog
    ) { }

    ngOnInit() { 
        this.api.getList();
    }

    add() {
        let dialogRef = this.dialog.open(ShopsTagsAdd);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.add(res);
            }
        });
    }

    edit(item: any){
        let dialogRef = this.dialog.open(ShopsTagsAdd, {data: item});
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.api.edit(res);
            }
        });
    }
}