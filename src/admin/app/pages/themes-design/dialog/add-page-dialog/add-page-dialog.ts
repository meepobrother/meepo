import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CatalogService } from '../../section/catalog.service';
import { LayoutContainer } from '../../../../design';
import uuid from 'uuid';
@Component({
    selector: 'add-page-dialog',
    templateUrl: './add-page-dialog.html',
    styleUrls: ['./add-page-dialog.scss']
})
export class AddPageDialog implements OnInit {
    // @Input() data: any;
    form: FormGroup;
    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public fb: FormBuilder,
        public catalogService: CatalogService
    ) {
        this.form = this.fb.group({
            title: [''],
            keyword: [''],
            desc: [''],
            cata_id: [''],
            header: [[]],
            footer: [[]],
            body: [[]],
            menu: [[]],
            code: [uuid()]
        });

        this.dialog.afterOpen().subscribe(() => {
            const { title, cata_id, keyword, desc, header, body, footer, menu, code } = Object.assign(new LayoutContainer, this.data);
            this.form.get('title').setValue(title);
            this.form.get('keyword').setValue(keyword);
            this.form.get('desc').setValue(desc);
            this.form.get('header').setValue(header);
            this.form.get('body').setValue(body);
            this.form.get('footer').setValue(footer);
            this.form.get('menu').setValue(menu);
            this.form.get('cata_id').setValue(cata_id);
            this.form.get('code').setValue(code);
        });
    }

    ngOnInit() { 
        const { title, cata_id, keyword, desc, header, body, footer, menu, code } = Object.assign(new LayoutContainer, this.data);
        this.form.get('title').setValue(title);
        this.form.get('keyword').setValue(keyword);
        this.form.get('desc').setValue(desc);
        this.form.get('header').setValue(header);
        this.form.get('body').setValue(body);
        this.form.get('footer').setValue(footer);
        this.form.get('menu').setValue(menu);
        this.form.get('cata_id').setValue(cata_id);
        this.form.get('code').setValue(code);
    }

    cancelPageDialog() {
        this.dialog.close();
    }

    clickAddPageConfirm() {
        this.dialog.close(this.form.value);
    }
    // 选择布局
    onSelectTheme(container: LayoutContainer) {
        this.form.get('header').setValue(container.header);
        this.form.get('body').setValue(container.body);
        this.form.get('footer').setValue(container.footer);
        this.form.get('menu').setValue(container.menu);
        this.dialog.close(this.form.value);
    }
}