import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../core/api';
@Component({
    selector: 'bbs-topic',
    templateUrl: './bbs-topic.html',
    styleUrls: ['./bbs-topic.scss']
})
export class BbsTopic implements OnInit {
    topics: any[] = [];
    constructor(
        public api: ApiService
    ) { 
        this.topics = [
            {
                title: '课程问答',
                desc: '【课程问答】非你 “慕” 属——你是慕课网的真爱 “粉” 吗？',
                look_num: 1216,
                topic_num: 140,
                icon: 'fa fa-bolt'
            },
            {
                title: '运营交流',
                desc: '【运营交流】非你 “慕” 属——你是慕课网的真爱 “粉” 吗？',
                look_num: 1216,
                topic_num: 140,
                icon: 'fa fa-calendar'
            },
            {
                title: '文案策划',
                desc: '【文案策划】非你 “慕” 属——你是慕课网的真爱 “粉” 吗？',
                look_num: 1216,
                topic_num: 140,
                icon: 'fa fa-star'
            },
            {
                title: '更新记录',
                desc: '【更新记录】非你“慕”属——你是慕课网的真爱 “粉” 吗？',
                look_num: 1216,
                topic_num: 140,
                icon: 'fa fa-edit'
            }
        ];
    }

    ngOnInit() { }

    getList(){
        this.api.mpost('topics.getListTopicsGroup',{}).subscribe((res: any)=>{
            this.topics = res.info;
        });
    }
}
