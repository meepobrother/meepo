import { Component, OnInit, Input } from '@angular/core';
import { UuItemBoxDefault } from '../../../../classes';

import { MatDialog } from '@angular/material';
import { ImageLinkSelect } from '../../../setting';
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

    add(){
        let dialogRef = this.dialog.open(ImageLinkSelect);
    }
}