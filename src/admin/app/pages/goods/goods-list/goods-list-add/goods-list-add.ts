import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../../core';
import { isArray } from '../../../../meepo/util';
@Component({
    selector: 'goods-list-add',
    templateUrl: './goods-list-add.html',
    styleUrls: ['./goods-list-add.scss']
})
export class GoodsListAdd implements OnInit {

    shops: any[] = [];
    goodGroups: any[] = [];
    form: any = {};

    thumbs: any[] = [];

    constructor(
        public dialog: MatDialogRef<any>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        public fb: FormBuilder,
        public api: ApiService
    ) {
        this.dialog.afterOpen().subscribe((res: any) => {
            let { title, desc, shop_id, count, price, id, thumbs } = this.data || {title: '',desc: '',shop_id: '',count: '',price: '',id: '', thumbs: []};
            this.form['title'] = title || '';
            this.form['desc'] = desc || '';
            this.form['shop_id'] = shop_id || '';
            this.form['count'] = count || '';
            this.form['price'] = price || '';
            this.form['id'] = id || '';
            this.form['thumbs'] = isArray(thumbs) ? thumbs : [];
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
        this.dialog.close(this.form);
    }

    addImage(e: any){
        this.form.thumbs.push(e);
    }
}