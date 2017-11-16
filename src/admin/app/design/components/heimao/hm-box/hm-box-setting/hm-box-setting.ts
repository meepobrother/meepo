import { Component, OnInit, Input, HostListener } from '@angular/core';
import { HmBoxDefault } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { SelectPageDialog } from '../../../../../share/setting';

@Component({
    selector: 'hm-box-setting',
    templateUrl: './hm-box-setting.html',
    styleUrls: ['./hm-box-setting.scss']
})
export class HmBoxSetting implements OnInit {
    @Input() widget: HmBoxDefault = new HmBoxDefault();
    constructor(
        public dialog: MatDialog
    ) { }
    ngOnInit() { }

    add() {
        let item = {
            title: ''
        }
        this.widget.items.push(item);
    }

    selectLink(item: any) {
        let dialogRef = this.dialog.open(SelectPageDialog);
        dialogRef.afterClosed().subscribe(link => {
            item.link = link;
        });
    }
}
