import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { LayoutHeader } from '../../../../classes';
@Component({
    selector: 'layout-header-select',
    templateUrl: './layout-header-select.html',
    styleUrls: ['./layout-header-select.scss']
})
export class LayoutHeaderSelect implements OnInit {
    constructor(
        public dialog: MatDialogRef<any>
    ) { }

    ngOnInit() { }

    select(){
        const footer = new LayoutHeader();
        this.dialog.close(footer);
    }
}