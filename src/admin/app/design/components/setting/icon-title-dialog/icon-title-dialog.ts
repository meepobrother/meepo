import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { IconSelectDialog } from '../icon-select-dialog/icon-select-dialog';
@Component({
    selector: 'icon-title-dialog',
    templateUrl: './icon-title-dialog.html',
    styleUrls: ['./icon-title-dialog.scss']
})
export class IconTitleDialog implements OnInit {
    @Input() widget: IconTitleDefault = new IconTitleDefault();
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<any>,
        public dialog: MatDialog
    ) {
        this.dialogRef.afterOpen().subscribe(r => {
            let { icon, title } = this.data || new IconTitleDefault();
            this.widget.icon = icon;
            this.widget.title = title;
        });
    }

    ngOnInit() { }

    selectIcon() {
        let dialogRef = this.dialog.open(IconSelectDialog);
        dialogRef.afterClosed().subscribe(icon => {
            this.widget.icon = icon;
        });
    }

    save() {
        this.dialogRef.close(this.widget);
    }

    cancel() {
        this.dialogRef.close();
    }
}

export class IconTitleDefault {
    title: string;
    icon: string;
}