import { Component, OnInit } from '@angular/core';
import { ShopsTagsService } from '../../../../pages/shops/shops-tags/shops-tags.service';
import { MatDialog } from '@angular/material';
import { ApiService } from '../../../../core';
@Component({
    selector: 'goods-group-data-select',
    templateUrl: './goods-group-data-select.html',
    styleUrls: ['./goods-group-data-select.scss']
})
export class GoodsGroupDataSelect implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        this.api.mpost('goods.getListGoodsGroup', { page: 1, psize: 30 }).subscribe((res: any) => {
            this.list = res.info;
        });
    }
}