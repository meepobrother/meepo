import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'skills-list-edit',
    templateUrl: './skills-list-edit.html',
    styleUrls: ['./skills-list-edit.scss']
})
export class SkillsListEdit implements OnInit {
    forms: any[] = [
        {
            title: '姓名'
        },{
            title: '电话'
        }, {
            title: '驾驶证'
        }, {
            title: '身份证'
        }, {
            title: '证书'
        },
    ];
    constructor() { }
    ngOnInit() { }

    save(){}

    cancel(){}
}
