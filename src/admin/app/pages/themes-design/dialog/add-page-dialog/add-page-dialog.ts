import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CatalogService } from '../../section/catalog.service';
import { LayoutContainer } from '../../../../design';
import { ApiService } from '../../../../core';
import uuid from 'uuid';
@Component({
    selector: 'add-page-dialog',
    templateUrl: './add-page-dialog.html',
    styleUrls: ['./add-page-dialog.scss']
})
export class AddPageDialog implements OnInit {
    // @Input() data: any;
    form: FormGroup;
    catalogs: any[] = [];
    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public fb: FormBuilder,
        public catalogService: CatalogService,
        public apiService: ApiService
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
            code: [uuid()],
            id: ['']
        });

        this.dialog.afterOpen().subscribe(() => {
            const { title, cata_id, keyword, desc, header, body, footer, menu, code, id } = Object.assign(new LayoutContainer, this.data);
            this.form.get('title').setValue(title);
            this.form.get('keyword').setValue(keyword);
            this.form.get('desc').setValue(desc);
            this.form.get('header').setValue(header);
            this.form.get('body').setValue(body);
            this.form.get('footer').setValue(footer);
            this.form.get('menu').setValue(menu);
            this.form.get('cata_id').setValue(cata_id);
            this.form.get('code').setValue(code);
            this.form.get('id').setValue(id);
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

        this.getCatalogs();
    }

    getCatalogs() {
        this.apiService.mpost('app.getListAppCatalog', {}).subscribe((res: any) => {
            this.catalogs = res.info;
        });
    }

    cancelPageDialog() {
        this.dialog.close();
    }

    clickAddPageConfirm() {
        this.apiService.mpost('app.editAppCatalogPage',this.form.value).subscribe((res: any)=>{
            this.dialog.close(this.form.value);            
        });
    }
    // 选择布局
    onSelectTheme(container: LayoutContainer) {
        this.form.get('header').setValue(container.header);
        this.form.get('body').setValue(container.body);
        this.form.get('footer').setValue(container.footer);
        this.form.get('menu').setValue(container.menu);
        this.apiService.mpost('app.editAppCatalogPage',this.form.value).subscribe((res: any)=>{
            this.dialog.close(this.form.value);            
        });
    }
}