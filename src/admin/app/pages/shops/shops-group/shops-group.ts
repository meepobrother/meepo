import { Component, OnInit } from '@angular/core';
import { ShopsGroupService } from './shops-group.service';
import { ShopsGroupAdd } from './shops-group-add';

import { MdDialog } from '@angular/material';
@Component({
    selector: 'shops-group',
    templateUrl: './shops-group.html',
    styleUrls: ['./shops-group.scss']
})
export class ShopsGroup implements OnInit {
    constructor(
        public api: ShopsGroupService,
        public dialog: MdDialog
    ) { }

    ngOnInit() { }

    add() { 
        let dialogRef = this.dialog.open(ShopsGroupAdd);
        dialogRef.afterClosed().subscribe(res=>{
            if(res){
                this.api.add(res);
            }
        });
    }

    edit(item: any) {
        let dialogRef = this.dialog.open(ShopsGroupAdd, { data: item });
        dialogRef.afterClosed().subscribe(res=>{
            if(res){
                this.api.edit(res);
            }
        });
    }
}