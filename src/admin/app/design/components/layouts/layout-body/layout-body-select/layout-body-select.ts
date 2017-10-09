import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { LayoutBody } from '../layout-body';
@Component({
    selector: 'layout-body-select',
    templateUrl: './layout-body-select.html',
    styleUrls: ['./layout-body-select.scss']
})
export class LayoutBodySelect implements OnInit {
    constructor(
        public dialog: MatDialogRef<any>
    ) { }

    ngOnInit() { }

    select(){
        const footer = new LayoutBody();
        this.dialog.close(footer);
    }
}
