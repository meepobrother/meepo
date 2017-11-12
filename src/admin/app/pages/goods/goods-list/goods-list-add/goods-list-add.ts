import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../../core';

@Component({
    selector: 'goods-list-add',
    templateUrl: './goods-list-add.html',
    styleUrls: ['./goods-list-add.scss']
})
export class GoodsListAdd implements OnInit {

    shops: any[] = [];
    goodGroups: any[] = [];
    form: FormGroup;

    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public fb: FormBuilder,
        public api: ApiService
    ) {
        this.form = this.fb.group({
            title: [''],
            desc: [''],
            shop_id: [''],
            count: [''],
            price: [''],
            id: ['']
        });
        this.dialog.afterOpen().subscribe((res: any) => {
            let { title, desc, shop_id, count, price, id } = this.data;
            this.form.get('title').setValue(title);
            this.form.get('desc').setValue(desc);
            this.form.get('shop_id').setValue(shop_id);
            this.form.get('count').setValue(count);
            this.form.get('price').setValue(price);
            this.form.get('id').setValue(id);
        });
    }

    ngOnInit() {
        this.getShops();
    }

    getShops() {
        this.api.mpost('shops.getListShops', {}).subscribe((res: any) => {
            this.shops = res.info;
        });
        this.api.mpost('goods.getListGoodsGroup', {}).subscribe((res: any) => {
            this.goodGroups = res.info;
        });
    }

    cancel() {
        this.dialog.close();
    }

    save() {
        this.dialog.close(this.form.value);
    }
}