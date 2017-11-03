import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
    selector: 'icon-select-dialog',
    templateUrl: './icon-select-dialog.html',
    styleUrls: ['./icon-select-dialog.scss']
})
export class IconSelectDialog implements OnInit {
    constructor(
        public dialog: MatDialog,
        public dialogRef: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) { 
        
    }

    ngOnInit() { }

    close(){
        this.dialogRef.close();
    }

    onChange(e: any){
        this.dialogRef.close(e);
    }
}