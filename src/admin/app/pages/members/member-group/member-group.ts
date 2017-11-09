import { Component, OnInit } from '@angular/core';
import { MemberGroupServiceService } from './member-group.service';
import { AddGroup } from './add-group';
import { MatDialog } from '@angular/material';
import { Group, AddGroupOpt } from './add-grop-opt';

@Component({
    selector: 'member-group',
    templateUrl: './member-group.html',
    styleUrls: ['./member-group.scss']
})
export class MemberGroup implements OnInit {
    constructor(
        public api: MemberGroupServiceService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.api.getList();
    }

    edit(item: any) {
        const dialogRef = this.dialog.open(AddGroup, { data: item });
        dialogRef.afterClosed().subscribe((result: AddGroupOpt) => {
            if (result) {
                this.api.edit(result.item);
            }
        });
    }

    addGroup() {
        const dialogRef = this.dialog.open(AddGroup);
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.api.add(result.item);
            }
        });
    }

    updateStatus(item: Group) {
        this.api.updateStatus(item);
        if(item.status == 1){
            item.status = 0;
        }else{
            item.status = 1;
        }
    }

    editGroup(item: any, index: number){

    }

    deleteGroup(item: any){
        this.api.delete(item).subscribe(res=>{

        });
    }
}