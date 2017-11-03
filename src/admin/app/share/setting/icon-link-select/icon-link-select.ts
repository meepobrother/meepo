import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { SelectPageDialog } from '../select-page-dialog';
import { IconSelectDialog } from '../../../dialogs';
@Component({
    selector: 'icon-link-select',
    templateUrl: './icon-link-select.html',
    styleUrls: ['./icon-link-select.scss']
})
export class IconLinkSelect implements OnInit {
    @Input() widget: IconLinkDefault = new IconLinkDefault();
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<any>,
        public dialog: MatDialog
    ) {

        this.dialogRef.afterOpen().subscribe(r => {
            let { icon, link, title } = this.data || new IconLinkDefault();
            this.widget.icon = icon;
            this.widget.link = link;
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

export class IconLinkDefault {
    title: string = '';
    icon: string = '';
    link: string = '';
}