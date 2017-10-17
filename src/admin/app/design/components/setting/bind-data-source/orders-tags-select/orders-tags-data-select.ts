import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from '../../../../../core';
@Component({
    selector: 'orders-tags-data-select',
    templateUrl: './orders-tags-data-select.html',
    styleUrls: ['./orders-tags-data-select.scss']
})
export class OrdersTagsDataSelect implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    ngOnInit() { 
        this.getList();
    }

    getList(){
        this.api.mpost('orders.getListOrderTags',{}).subscribe((res: any)=>{
            this.list = res.info;
        });
    }
}