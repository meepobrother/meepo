import { Component, OnInit } from '@angular/core';
import { PageService, ApplicationService, WidgetService } from '../../design';
import { MatDialog } from '@angular/material';
import { AddPageDialog } from './add-page-dialog';
import { Button } from '../../design';

import {
    ButtonView,
    WeuiCellsView, 
    InputView,
    SliderView,
    UploaderView
} from '../../design/components';

import uuid from 'uuid';
@Component({
    selector: 'tests-page',
    templateUrl: './tests-page.html',
    styleUrls: ['./tests-page.scss']
})
export class TestsPage implements OnInit {
    widget: Button = new Button();
    constructor(
        public page$: PageService,
        public application$: ApplicationService,
        public dialog: MatDialog,
        public widget$: WidgetService
    ) {
    }

    addButton() {
        this.widget$.addWidget(uuid(), ButtonView);
    }

    addList() {
        this.widget$.addWidget(uuid(), WeuiCellsView);
    }

    addInput() {
        this.widget$.addWidget(uuid(), InputView);
    }

    addSlider() {
        this.widget$.addWidget(uuid(), SliderView);
    }

    addUploader() {
        this.widget$.addWidget(uuid(), UploaderView);
    }

    ngOnInit() {
        this.page$.getList();
    }

    addPage() {
        const dialogRef = this.dialog.open(AddPageDialog);
        dialogRef.afterClosed().subscribe(res => {
            console.log(res);
            if (res) {
                this.page$.add(res);
            }
        });
    }

    deletePage(item: any) {
        this.page$.delete(item);
    }

    editPage(page: any) {
        const dialogRef = this.dialog.open(AddPageDialog, { data: page });
        dialogRef.afterClosed().subscribe(res => {
            console.log(res);
            if (res) {
                this.page$.edit(res);
            }
        });
    }

    setCurrentPage(page: any) {
        this.page$.list.forEach(page => {
            page.active = false;
        });
        page.active = !page.active;
        this.application$.open();
    }
}

