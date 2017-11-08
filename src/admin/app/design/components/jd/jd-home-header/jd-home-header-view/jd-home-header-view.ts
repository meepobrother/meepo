import { Component, OnInit, Input } from '@angular/core';
import { JdHomeHeaderDefault } from '../../../../classes';
import * as store from 'store';

@Component({
    selector: 'jd-home-header-view',
    templateUrl: './jd-home-header-view.html',
    styleUrls: ['./jd-home-header-view.scss']
})
export class JdHomeHeaderView implements OnInit {
    @Input() widget: JdHomeHeaderDefault = new JdHomeHeaderDefault();
    constructor() { }

    ngOnInit() { 
        this.widget.info = store.get('__meepo_myuserinfo',{});
        this.widget.info['nickname'] = this.widget.info['nickname'] || '昵称';
        this.widget.info['mobile'] = this.widget.info['mobile'] || '电话未知';
        this.widget.info['tag'] = this.widget.info['tag'] || '标签';
        this.widget.info['desc'] = this.widget.info['desc'] || '用户等级';
    }
}