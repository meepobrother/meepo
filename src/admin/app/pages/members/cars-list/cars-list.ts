import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
@Component({
    selector: 'cars-list',
    templateUrl: './cars-list.html',
    styleUrls: ['./cars-list.scss']
})
export class CarsList implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { 
        this.getList();
    }

    getList(){
        this.api.mpost('carfiles.update',{}).subscribe(res=>{});
        this.api.mpost('carfiles.search',{page: 1, psize: 30}).subscribe((res: any)=>{
            this.list = res.info;
        })
    }
}
