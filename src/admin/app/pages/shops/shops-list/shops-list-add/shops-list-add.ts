import { Component, OnInit, Inject } from '@angular/core';
import { ApiService } from '../../../../core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MemberSelectDialog } from '../../../../meepo/src/index';
@Component({
    selector: 'shops-list-add',
    templateUrl: './shops-list-add.html',
    styleUrls: ['./shops-list-add.scss']
})
export class ShopsListAdd implements OnInit {
    form: any = {};
    groups: any[] = [];

    constructor(
        public api: ApiService,
        public dialogRef: MatDialogRef<any>,
        public fb: FormBuilder,
        // @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        this.dialogRef.afterOpen().subscribe((res: any) => {
            let { title, mobile, location, desc, content, shopers, kefus, employers, group, tag } =  { title: '', mobile: '', location: '', desc: '', content: '', shopers: '', kefus: '', employers: '', group: '', tag: '' };

            this.form['title'] = title;
            this.form['mobile'] = mobile;
            this.form['location'] = location;
            this.form['desc'] = desc;
            this.form['content'] = content;
            this.form['shopers'] = shopers;
            this.form['kefus'] = kefus;
            this.form['employers'] = employers;
            this.form['group'] = group;
            this.form['tag'] = tag;
        });
    }

    ngOnInit() {
        this.api.mpost('shops.getListShopsGroup', {}).subscribe((res: any) => {
            this.groups = res.info;
        });
    }

    cancel() {
        this.dialogRef.close();
    }

    add() {
        this.dialogRef.close(this.form.value);
    }

    onChangeShopers(e: any) {
        this.form['shopers'] = e;
    }

    onChangeKefus(e: any) {
        this.form['kefus'] = e;
    }

    onChangeEmployers(e: any) {
        this.form['employers'] = e;
    }

    delete() { }

    onSelectShopGroup(e: any) {
        this.form['group_id'] = e.id;
    }
}