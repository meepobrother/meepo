import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ApiService } from '../../../../../core';
@Component({
    selector: 'orders-group-data-select',
    templateUrl: './orders-group-data-select.html',
    styleUrls: ['./orders-group-data-select.scss']
})
export class OrdersGroupDataSelect implements OnInit {
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