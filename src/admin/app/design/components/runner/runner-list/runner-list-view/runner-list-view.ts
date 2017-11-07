import { Component, OnInit, Input } from '@angular/core';
import { RunnerListDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';
import * as store from 'store';

@Component({
    selector: 'runner-list-view',
    templateUrl: './runner-list-view.html',
    styleUrls: ['./runner-list-view.scss']
})
export class RunnerListView implements OnInit {
    @Input() widget: RunnerListDefault = new RunnerListDefault();
    activeItem: any;
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() {
        this.widget['btns'] = this.widget['btns'] || [];
        this.widget['items'] = this.widget['items'] || [];
        
        this.widget.items.map(res=>{
            if(res['active']){
                this.activeItem = res;
                this.getList();
            }
        });
    }

    getList() {
        let openid = store.get('__meepo_openid');
        if(this.activeItem){
            this.activeItem['__post'] = this.activeItem['__post'] || {};
            this.activeItem['__post']['action'] = this.activeItem['__post']['action'] || 'mylog';
            this.activeItem['__post']['openid'] = openid;
            this.api.mpost(this.activeItem['__do'], this.activeItem['__post'], 'imeepos_runner').subscribe((res: any) => {
                this.widget.logs = res.info;
            });
        }
    }

    _onMore(item: any, index: number) { 

    }

    onTab(item: any) { 
        this.widget.items.map(res=>{
            res['active'] = false;
        })
        item['active'] = !item['active'];
        this.activeItem = item;
        this.getList();
    }

    pai(item: any){}
    repai(item: any){}
    finish(item: any){}
    confirm(item: any){}
}