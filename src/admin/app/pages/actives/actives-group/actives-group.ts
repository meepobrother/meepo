import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core';
@Component({
    selector: 'actives-group',
    templateUrl: './actives-group.html',
    styleUrls: ['./actives-group.scss']
})
export class ActivesGroup implements OnInit {
    list: any[] = [];
    constructor(

        public api: ApiService
    ) { }

    ngOnInit() {
        this.getList();
    }

    add(){}

    getList(){
        this.api.mpost('actives.getListActivesGroup',{}).subscribe((res: any)=>{
            this.list = res.info;
        })
    }
}
