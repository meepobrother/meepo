
import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { OrderTagsAdd } from './order-tags-add';

@Component({
    selector: 'order-tags',
    templateUrl: './order-tags.html',
    styleUrls: ['./order-tags.scss']
})
export class OrderTags implements OnInit {
    list: any[] = [];
    constructor(
        public dialog: MdDialog
    ) { }

    ngOnInit() { }

    add(){
        const dialogRef = this.dialog.open(OrderTagsAdd);
        dialogRef.afterClosed().subscribe(res=>{
            if(res){
                this.list.unshift(res)
            }
        });
    }
}