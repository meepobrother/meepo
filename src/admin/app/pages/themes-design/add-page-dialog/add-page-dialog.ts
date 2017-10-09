import { Component, OnInit, Inject } from '@angular/core';
import { PageService } from '../../../design';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import uuid from 'uuid';
import { FormBuilder, FormGroup } from '@angular/forms';
import { WeuiPage, LayoutContainer } from '../../../design';
@Component({
    selector: 'add-page-dialog',
    templateUrl: './add-page-dialog.html',
    styleUrls: ['./add-page-dialog.scss']
})
export class AddPageDialog implements OnInit {
    form: FormGroup;
    constructor(
        public api: PageService,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialog: MatDialogRef<any>,
        public fb: FormBuilder
    ) {
        this.form = this.fb.group({
            title: [''],
            code: [uuid()],
            keyword: [''],
            desc: [''],
            type: ['page'],
            header: [{}],
            footer: [{}],
            body: [{}],
            menu: [{}]
        });

        this.dialog.afterOpen().subscribe(() => {
            this.data = this.data || new LayoutContainer();
            const { title, code, keyword, desc, children, type, header, body, footer, menu } = this.data;
            this.form.get('title').setValue(title);
            this.form.get('code').setValue(code);
            this.form.get('keyword').setValue(keyword);
            this.form.get('desc').setValue(desc);
            this.form.get('type').setValue(type);
            this.form.get('header').setValue(header);
            this.form.get('body').setValue(body);
            this.form.get('footer').setValue(footer);
            this.form.get('menu').setValue(menu);
        });
    }

    ngOnInit() {

    }

    save() {
        this.dialog.close(this.form.value as WeuiPage);
    }

    onSelectTheme(e: any){
        this.form.get('children').setValue([e]);
    }
}