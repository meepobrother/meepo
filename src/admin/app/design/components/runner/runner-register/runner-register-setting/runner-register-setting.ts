import { Component, OnInit, Input } from '@angular/core';
import { RunnerRegisterDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';
declare const layui: any;
declare const jQuery: any;

@Component({
    selector: 'runner-register-setting',
    templateUrl: './runner-register-setting.html',
    styleUrls: ['./runner-register-setting.scss']
})
export class RunnerRegisterSetting implements OnInit {
    @Input() widget: RunnerRegisterDefault = new RunnerRegisterDefault();
    item: any;
    index: number;
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { 
        
    }

    upload(item: any, index: number){
        this.item = item;
        this.index = index;
    }
}
