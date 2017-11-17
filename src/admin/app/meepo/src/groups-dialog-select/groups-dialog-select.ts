import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'groups-dialog-select',
    templateUrl: './groups-dialog-select.html',
    styleUrls: ['./groups-dialog-select.scss']
})
export class GroupsDialogSelect implements OnInit {
    status: any[] = [];
    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

    ngOnInit() { }

    close(){
        this.dialog.close();
    }

    selectStatus(item: any){
        this.dialog.close(item);
    }
}
