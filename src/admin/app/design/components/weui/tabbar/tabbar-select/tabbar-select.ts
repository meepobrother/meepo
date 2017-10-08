import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Tabbar } from '../tabbar';
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