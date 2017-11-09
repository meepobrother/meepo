import { Component, OnInit, Input, Inject } from '@angular/core';
import { MeepoMarqueeDefault } from '../../../../classes';
import { ImageLinkTitleSelect } from '../../../../../share/setting';
import { MatDialog } from '@angular/material';
@Component({
    selector: 'meepo-marquee-setting',
    templateUrl: './meepo-marquee-setting.html',
    styleUrls: ['./meepo-marquee-setting.scss']
})
export class MeepoMarqueeSetting implements OnInit {
    @Input() widget: MeepoMarqueeDefault = new MeepoMarqueeDefault();
    items: any[] = [];
    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    addItem() {
        let dialogRef = this.dialog.open(ImageLinkTitleSelect, { data: {} });
        dialogRef.afterClosed().subscribe((res: any) => {
            let { title, link, image } = res;
            let item = { title: title, link: link, image: image };
            this.widget.items.push(item);
        });
    }
    editItem(item: any, index: number) {
        let dialogRef = this.dialog.open(ImageLinkTitleSelect, { data: item });
        dialogRef.afterClosed().subscribe((res: any) => {
            let { title, link, image } = res;
            let item = { title: title, link: link, image: image };
            this.widget.items[index] = item;
        });
    }

    deleteItem(index: number) {
        this.widget.items.splice(index, 1);
    }
}