import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { AddForm } from '../add-form';

@Component({
    selector: 'forms-list',
    templateUrl: './forms-list.html',
    styleUrls: ['./forms-list.scss']
})
export class FormsList implements OnInit {
    forms: any[] = [];
    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getList();
        this.api.mpost('app.update', {}).subscribe(res => { });
    }

    getList() {
        this.api.mpost('app.getListAppForms', { page: 1, psize: 30 }, 'imeepos_runner', true).subscribe((res: any) => {
            this.forms = res.info;
        });
    }

    addForm() {
        const dialogRef = this.dialog.open(AddForm);
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.getList();
            }
        });
    }

    editForm(item: any) {
        const dialogRef = this.dialog.open(AddForm, { data: item });
        dialogRef.afterClosed().subscribe(res => {
            if (res) {
                this.getList();
            }
        });
    }

    deleteForm(item: any) {
        this.api.mpost('app.deleteAppForms', item, 'imeepos_runner', true).subscribe(res => {
            this.getList();
        });
    }
}
