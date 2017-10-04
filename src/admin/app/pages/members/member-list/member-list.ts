import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';

import { ApiService } from '../../../core';
@Component({
    selector: 'member-list',
    templateUrl: './member-list.html',
    styleUrls: ['./member-list.scss']
})
export class MemberList implements OnInit {
    list: any[] = [];
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { 
        this.api.mget('member.list').subscribe(res=>{
            const info = res['info'];
            const list = info['list'];
            this.list = list;
            console.log(this.list);
        });
    }
}


export class MemberDataSource extends DataSource<any>{
    connect(): Observable<any[]>{
        return Observable.create(observer=>{
            observer.next();
            observer.complete();
        });
    }
    disconnect(){}
}