import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { LayoutMenu } from '../../../../classes';
@Component({
    selector: 'layout-menu-select',
    templateUrl: './layout-menu-select.html',
    styleUrls: ['./layout-menu-select.scss']
})
export class LayoutMenuSelect implements OnInit {
    constructor(
        public dialog: MatDialogRef<any>
    ) { }

    ngOnInit() { }

    select(){
        const footer = new LayoutMenu();
        this.dialog.close(footer);
    }
}