import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { GoodsGroupAdd } from './goods-group-add';
import { ApiService } from '../../../core';
@Component({
    selector: 'goods-group',
    templateUrl: './goods-group.html',
    styleUrls: ['./goods-group.scss']
})
export class GoodsGroup implements OnInit {
    list: any[] = [];
    constructor(
        public dialog: MatDialog,
        public api: ApiService
    ) { }

    ngOnInit() { 
        this.getList();
    }

    getList(){
        this.api.mpost('goods.update').subscribe(res=>{});
        this.api.mpost('goods.getListGoodsGroup',{page: 1, psize: 30}).subscribe((res: any)=>{
            this.list = res.info;
        });
    }

    add(){
        const dialogRef = this.dialog.open(GoodsGroupAdd);
        dialogRef.afterClosed().subscribe(res=>{
            if(res){
                this.api.mpost('goods.addGoodsGroup',res).subscribe((res: any)=>{
                    this.list.unshift(res.info)
                });
            }
        });
    }

    edit(item: any){
        const dialogRef = this.dialog.open(GoodsGroupAdd, {data: item});
        dialogRef.afterClosed().subscribe(res=>{
            if(res){
                this.api.mpost('goods.addGoodsGroup',res).subscribe((res: any)=>{
                    this.getList();
                });
            }
        });
    }
}