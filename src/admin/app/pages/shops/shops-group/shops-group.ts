import { Component, OnInit } from '@angular/core';
import { ShopsGroupService } from './shops-group.service';
import { ShopsGroupAdd } from './shops-group-add';

import { MatDialog } from '@angular/material';
@Component({
    selector: 'shops-group',
    templateUrl: './shops-group.html',
    styleUrls: ['./shops-group.scss']
})
export class ShopsGroup implements OnInit {
    constructor(
        public api: ShopsGroupService,
        public dialog: MatDialog
    ) { }

    ngOnInit() { 
        this.api.getList();
    }

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
                console.log(res);
                this.api.edit(res);
            }
        });
    }

    updateStatus(item: any){
        this.api.updateStatus(item);
    }
}