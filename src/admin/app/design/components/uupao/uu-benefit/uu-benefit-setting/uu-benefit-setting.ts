import { Component, OnInit, Input } from '@angular/core';
import { UuBenefitDefault } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { ImageLinkTitleSelect } from '../../../setting';
@Component({
    selector: 'uu-benefit-setting',
    templateUrl: './uu-benefit-setting.html',
    styleUrls: ['./uu-benefit-setting.scss']
})
export class UuBenefitSetting implements OnInit {
    @Input() widget: UuBenefitDefault = new UuBenefitDefault();

    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    add() {
        let dialogRef = this.dialog.open(ImageLinkTitleSelect);
        dialogRef.afterClosed().subscribe(res => { 
            this.widget.children.push(res);
        });
    }

    edit(index: number, item: any) {
        let dialogRef = this.dialog.open(ImageLinkTitleSelect, { data: item });
        dialogRef.afterClosed().subscribe(res => { 
            this.widget.children[index] = res;
        });
    }

    delete(index: number) { }
}