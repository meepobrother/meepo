import { Component, OnInit } from '@angular/core';
import { ShopsTagsService } from '../../../../../pages/shops/shops-tags/shops-tags.service';
import { MatDialog } from '@angular/material';
import { ApiService } from '../../../../../core';
@Component({
    selector: 'goods-tags-data-select',
    templateUrl: './goods-tags-data-select.html',
    styleUrls: ['./goods-tags-data-select.scss']
})
export class GoodsTagsDataSelect implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('goods.getListGoodsTags', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.list = res.info;
        });
    }
}