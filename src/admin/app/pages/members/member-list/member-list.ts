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
        this.api.mget('member.getSystem').subscribe(res => {
            this.list = res['info'];
            console.log(this.list);
        });
    }

    handle(ref: any) {
        console.log(ref);
        ref.destroy();
    }

    click(ref: any) {
        console.log(ref.index)
        console.log(ref.rowData)
        console.log(ref.innerHTML)
    }

    locationTo(loc: any) {
        console.log(loc);
    }

    rowClassNameFilter(): string {
        return 'text-center'
    }
}


export class MemberDataSource extends DataSource<any>{
    connect(): Observable<any[]> {
        return Observable.create(observer => {
            observer.next();
            observer.complete();
        });
    }
    disconnect() { }
}