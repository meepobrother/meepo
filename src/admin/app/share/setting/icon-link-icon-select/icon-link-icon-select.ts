import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SelectPageDialog } from '../select-page-dialog';
import { IconSelectDialog } from '../../../dialogs';

@Component({
    selector: 'icon-link-icon-select',
    templateUrl: './icon-link-icon-select.html',
    styleUrls: ['./icon-link-icon-select.scss']
})
export class IconLinkIconSelect implements OnInit {
    @Input() widget: IconLinkIconDefault = new IconLinkIconDefault();
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<any>,
        public dialog: MatDialog
    ) {

        this.dialogRef.afterOpen().subscribe(r => {
            let { left, right, link, title } = this.data || new IconLinkIconDefault();
            this.widget.left = left;
            this.widget.right = right;
            
            this.widget.link = link;
            this.widget.title = title;
        });
    }

    ngOnInit() { }

    selectLeftIcon() {
        let dialogRef = this.dialog.open(IconSelectDialog);
        dialogRef.afterClosed().subscribe(icon => {
            this.widget.left = icon;
        });
    }

    selectRightIcon() {
        let dialogRef = this.dialog.open(IconSelectDialog);
        dialogRef.afterClosed().subscribe(icon => {
            this.widget.right = icon;
        });
    }

    selectLink() {
        let dialogRef = this.dialog.open(SelectPageDialog);
        dialogRef.afterClosed().subscribe(link => {
            this.widget.link = link;
        });
    }

    save() {
        this.dialogRef.close(this.widget);
    }

    cancel() {
        this.dialogRef.close();
    }

}

export class IconLinkIconDefault {
    title: string = '';
    left: string = '';
    link: string = '';
    right: string = '';
}