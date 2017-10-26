import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from '../../../../core';
@Component({
    selector: 'order-list-add',
    templateUrl: './order-list-add.html',
    styleUrls: ['./order-list-add.scss']
})
export class OrderListAdd implements OnInit {
    classes: any[] = [];
    tags: any[] = [];
    form: FormGroup;
    selects: SelectionModel<any> = new SelectionModel(true, [], true);
    constructor(
        public dialogRef: MatDialogRef<any>,
        public fb: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public api: ApiService
    ) {
        this.form = this.fb.group({
            title: [''],
            desc: [''],
            money: [''],
            class_id: [''],
            tag: [''],
            uniacid: [''],
            id: ['']
        });

        this.selects.onChange.subscribe(res => {
            console.log(this.selects.selected);
            this.form.get('tag').setValue(this.selects.selected);
        });

        this.form.get('class_id').valueChanges.subscribe(id => {
            this.classes.map(r => {
                if (r.id === id) {
                    this.tags = r.tags || [];
                }
            });
        });

        this.dialogRef.afterOpen().subscribe(res => {
            let { title, desc, money, class_id, tag, uniacid, id } = this.data || { title: '', desc: '', money: '', class_id: 0, tag: '', id: 0, uniacid: 0 };
            this.form.get('title').setValue(title);
            this.form.get('desc').setValue(desc);
            this.form.get('money').setValue(money);
            this.form.get('class_id').setValue(class_id);
            this.form.get('tag').setValue(tag);
            this.form.get('uniacid').setValue(uniacid);
            this.form.get('id').setValue(id);
        });

        this.form.get('tag').valueChanges.subscribe(tags=>{
            
        });
    }

    ngOnInit() {
        this.getClasses();
    }

    getClasses() {
        this.api.mpost('orders.getListOrderClass', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.classes = res.info;
            this.tags = this.classes.length > 0 ? this.classes[0].tags : [];
            const class_id = this.classes.length > 0 ? this.classes[0].id : 0;
            this.form.get('class_id').setValue(class_id);
            this.tags = this.tags || [];
        });
    }

    select(item: any) {
        this.selects.toggle(item);
        this.form.get('tag').setValue(this.selects.selected);
    }

    postDate() {
        this.dialogRef.close(this.form.value);
    }

    delete() {
        this.api.mpost('orders.deleteOrder',this.form.value).subscribe(res=>{
            this.dialogRef.close();            
        });
    }

    cancel() {
        this.dialogRef.close();
    }
}