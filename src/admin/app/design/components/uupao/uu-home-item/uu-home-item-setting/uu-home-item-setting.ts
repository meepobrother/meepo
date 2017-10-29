import { Component, OnInit, Input } from '@angular/core';
import { UuHomeItemDefault } from '../../../../classes';
import { IconLinkIconSelect } from '../../../setting';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'uu-home-item-setting',
    templateUrl: './uu-home-item-setting.html',
    styleUrls: ['./uu-home-item-setting.scss']
})
export class UuHomeItemSetting implements OnInit {
    @Input() widget: UuHomeItemDefault = new UuHomeItemDefault();
    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    add() {
        let dialogRef = this.dialog.open(IconLinkIconSelect);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.widget.children.push(res);
            }
        });
    }

    edit(index: number, item: any) {
        let dialogRef = this.dialog.open(IconLinkIconSelect, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.widget.children[index] = res;
            }
        });
    }

    delete(index: number) { }
}