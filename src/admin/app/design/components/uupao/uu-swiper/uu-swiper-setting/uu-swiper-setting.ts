import { Component, OnInit, Input } from '@angular/core';
import { UuSwiperDefault } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { ImageLinkSelect } from '../../../setting';
@Component({
    selector: 'uu-swiper-setting',
    templateUrl: './uu-swiper-setting.html',
    styleUrls: ['./uu-swiper-setting.scss']
})
export class UuSwiperSetting implements OnInit {
    @Input() widget: UuSwiperDefault = new UuSwiperDefault();
    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    add() {
        let dialogRef = this.dialog.open(ImageLinkSelect);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.widget.children.push(res);
            }
        });
    }

    edit(index: number, item: any) {
        let dialogRef = this.dialog.open(ImageLinkSelect,{data: item});
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.widget.children[index] = res;
            }
        });
    }

    delete(index: number) {
        this.widget.children.splice(index, 1);
    }
}