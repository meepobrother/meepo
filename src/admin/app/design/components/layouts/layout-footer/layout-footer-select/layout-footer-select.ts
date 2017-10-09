import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { LayoutFooter } from '../layout-footer';
@Component({
    selector: 'layout-footer-select',
    templateUrl: './layout-footer-select.html',
    styleUrls: ['./layout-footer-select.scss']
})
export class LayoutFooterSelect implements OnInit {
    constructor(
        public dialog: MatDialogRef<any>
    ) { }

    ngOnInit() { }

    select(){
        const footer = new LayoutFooter();
        this.dialog.close(footer);
    }
}