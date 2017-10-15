import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { LayoutContainerModel } from '../../../../classes';
@Component({
    selector: 'layout-container-select',
    templateUrl: './layout-container-select.html',
    styleUrls: ['./layout-container-select.scss']
})
export class LayoutContainerSelect implements OnInit {
    @Output() onSelect: EventEmitter<any> = new EventEmitter();
    constructor(
        public dialog: MatDialogRef<any>
    ) { }

    ngOnInit() { }

    select(){
        const footer = new LayoutContainerModel();
        this.onSelect.emit(footer);
        this.dialog.close(footer);
    }
}