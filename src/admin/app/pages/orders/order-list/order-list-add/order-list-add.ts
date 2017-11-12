import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from '../../../../core';
import * as store from 'store';

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

    steps: any[] = [
        {
            title: '车辆信息',
            step: 1,
            status: 1
        },
        {
            title: '车辆检查',
            step: 2,
            status: 0
        },
        {
            title: '消费清单',
            step: 3,
            status: 0
        },
        {
            title: '结款交付',
            step: 4,
            status: 0
        },
    ];
    activeIndex: number = 0;
    checks: any[] = [];

    activeSetp: any;
    hasNext: boolean = true;
    hasPrev: boolean = false;

    carfile: any = {
        car_num: '',
        jar_num: '',
        licheng: '',
        realname: '',
        mobile: ''
    };

    checkItem: any = {
        title: '',
        desc: ''
    };

    editCheckItemIndex: any;
    isEditCheckItem: boolean = false;

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
            id: [''],
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

        this.form.get('tag').valueChanges.subscribe(tags => {

        });
    }

    ngOnInit() {
        this.getClasses();
        this.activeIndex = 0;
        this.activeSetp = this.steps[0];
    }

    addCheckItem() {
        if(this.isEditCheckItem){
            this.checks[this.editCheckItemIndex] = this.checkItem;
        }else{
            this.checks.push(this.checkItem);
        }
        this.checkItem = {
            title: '',
            desc: ''
        };
        this.editCheckItemIndex = false;
        this.isEditCheckItem = false;
    }

    editCheckItem(item: any, index: number){
        this.checkItem = item;
        this.editCheckItemIndex = index;
        this.isEditCheckItem = true;
    }

    deleteCheckItem(index: number) {
        this.checks.splice(index, 1);
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
        this.api.mpost('orders.deleteOrder', this.form.value).subscribe(res => {
            this.dialogRef.close();
        });
    }

    cancel() {
        this.dialogRef.close();
    }

    prevStep() {
        if (this.activeIndex - 1 >= 0) {
            this.activeIndex = this.activeIndex - 1;
            this.steps[this.activeIndex].status = 1;
            this.activeSetp = this.steps[this.activeIndex];
            this.steps.map((item, key) => {
                if (key > this.activeIndex) {
                    item.status = 0;
                }
            });
            console.log(this.activeIndex);
            this.hasPrev = this.activeIndex != 0;
            this.hasNext = true;
        }
    }
    nextStep() {
        if (this.activeIndex + 1 <= this.steps.length) {
            this.activeIndex = this.activeIndex + 1;
            this.steps[this.activeIndex].status = 1;
            this.activeSetp = this.steps[this.activeIndex];
            console.log(this.activeIndex);
            console.log(this.steps.length);
            this.hasNext = this.activeIndex != (this.steps.length - 1);
            this.hasPrev = true;
        }
    }
}