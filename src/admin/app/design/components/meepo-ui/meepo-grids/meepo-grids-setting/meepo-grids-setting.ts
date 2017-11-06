import { Component, OnInit, Input } from '@angular/core';
import { MeepoGridsDefault } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { ImageLinkTitleSelect } from '../../../../../share/setting';
@Component({
    selector: 'meepo-grids-setting',
    templateUrl: './meepo-grids-setting.html',
    styleUrls: ['./meepo-grids-setting.scss']
})
export class MeepoGridsSetting implements OnInit {
    @Input() widget: MeepoGridsDefault = new MeepoGridsDefault();
    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    add() {
        let dialogRef = this.dialog.open(ImageLinkTitleSelect, {
            data: { title: '标题', link: '', image: './assets/img/a1.jpg' }
        });
        dialogRef.afterClosed().subscribe((res: any) => {
            let { image, title, link } = res;
            let data = { image: image, title: title, link: link };
            this.widget.items.push(data);
        });
    }

    edit(item: any, index: number) {
        let dialogRef = this.dialog.open(ImageLinkTitleSelect, { data: item });
        dialogRef.afterClosed().subscribe((res: any) => {
            let { image, title, link } = res;
            let data = { image: image, title: title, link: link };
            this.widget.items[index] = data;
        });
    }

    delete(index: number) {
        this.widget.items.splice(index, 1);
    }
}

