import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
import { MatDialog } from '@angular/material';
import { ShopsListAdd } from './shops-list-add';
@Component({
    selector: 'shops-list',
    templateUrl: './shops-list.html',
    styleUrls: ['./shops-list.scss']
})
export class ShopsList implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService,
        public dialog: MatDialog
    ) { }

    ngOnInit() { 
        this.getList();
    }

    getList(){
        this.api.mpost('shops.update').subscribe(()=>{});
        this.api.mpost('shops.getListShops').subscribe((res: any)=>{
            this.list = res.info;
        });
    }

    add() {
        const dialogRef = this.dialog.open(ShopsListAdd);
        dialogRef.afterClosed().subscribe(res=>{
            if(res){
                this.api.mpost('shops.addShop',res).subscribe(res=>{
                    this.getList();
                });
            }
        })
    }

    edit(item: any) {
        const dialogRef = this.dialog.open(ShopsListAdd, { data: item });
    }

    delete(item: any){
        this.api.mpost('shops.deleteShop',item).subscribe((res=>{
            this.getList();
        }));
    }
}