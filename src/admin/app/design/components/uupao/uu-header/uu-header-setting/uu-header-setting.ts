import { Component, OnInit, Input } from '@angular/core';
import { UuHeaderDefault } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { IconLinkSelect } from '../../../../../share/setting';
@Component({
    selector: 'uu-header-setting',
    templateUrl: './uu-header-setting.html',
    styleUrls: ['./uu-header-setting.scss']
})
export class UuHeaderSetting implements OnInit {
    @Input() widget: UuHeaderDefault = new UuHeaderDefault();

    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    editLeft() {
        let dialogRef = this.dialog.open(IconLinkSelect);
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                let { title, link, icon } = data;
                this.widget.left.title = title;
                this.widget.left.icon = icon;
                this.widget.left.link = link;
            }
        });
    }

    editRight() {
        let dialogRef = this.dialog.open(IconLinkSelect);
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                let { title, link, icon } = data;
                this.widget.right.title = title;
                this.widget.right.icon = icon;
                this.widget.right.link = link;
            }
        });
    }
}