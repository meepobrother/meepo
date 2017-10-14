import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Tabbar } from '../../../../classes';
@Component({
    selector: 'tabbar-select',
    templateUrl: './tabbar-select.html',
    styleUrls: ['./tabbar-select.scss']
})
export class TabbarSelect implements OnInit {
    widgets: Tabbar[] = [];
    constructor(
        public dialogRef: MatDialogRef<any>
    ) { 
        const widget = new Tabbar();
        widget.content = [
            {
                title: '首页',
                icon: 'assets/images/icon_tabbar.png'
            },
            {
                title: '发现',
                icon: 'assets/images/icon_tabbar.png'
            },
            {
                title: '发布',
                icon: 'assets/images/icon_tabbar.png'
            },
            {
                title: '我的',
                icon: 'assets/images/icon_tabbar.png'
            },
        ];
        this.widgets.push(widget);
    }

    ngOnInit() { 
        // this.select(new Tabbar());
    }

    select(item: any) {
        console.log(item);
        this.dialogRef.close(item);
    }
}