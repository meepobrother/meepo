import { Component, OnInit, Input } from '@angular/core';
import { UuItemBoxDefault } from '../../../../classes';

import { MatDialog } from '@angular/material';
import { ImageLinkSelect } from '../../../../../share/setting';
@Component({
    selector: 'uu-item-box-setting',
    templateUrl: './uu-item-box-setting.html',
    styleUrls: ['./uu-item-box-setting.scss']
})
export class UuItemBoxSetting implements OnInit {
    @Input() widget: UuItemBoxDefault = new UuItemBoxDefault();
    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    add() {
        let dialogRef = this.dialog.open(ImageLinkSelect);
        dialogRef.afterClosed().subscribe(res => {
            this.widget.items.push(res);
        });
    }

    edit(index: number, item: any) {
        let dialogRef = this.dialog.open(ImageLinkSelect, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            let { title, link, image } = res;
            this.widget.items[index] = { title: title, link: link, image: image };
        });
    }

    delete(index: number) {
        this.widget.items.splice(index, 1);
    }
}