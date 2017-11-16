import { Component, OnInit, Input } from '@angular/core';
import { HmMarqueeDefault } from '../../../../classes';
import { MatDialog } from '@angular/material';
import { SelectPageDialog } from '../../../../../share/setting';
@Component({
    selector: 'hm-marquee-setting',
    templateUrl: './hm-marquee-setting.html',
    styleUrls: ['./hm-marquee-setting.scss']
})
export class HmMarqueeSetting implements OnInit {
    @Input() widget: HmMarqueeDefault = new HmMarqueeDefault();

    constructor(
        public dialog: MatDialog
    ) { }

    ngOnInit() { }

    onHeightChange(e: any) {
        this.widget.containerStyle['height'] = e;
        this.widget.containerStyle['line-height'] = e;
    }

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
