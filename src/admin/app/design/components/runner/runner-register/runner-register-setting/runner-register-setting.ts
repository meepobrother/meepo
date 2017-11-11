import { Component, OnInit, Input } from '@angular/core';
import { TaskStatusDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';
@Component({
    selector: 'runner-register-setting',
    templateUrl: './runner-register-setting.html',
    styleUrls: ['./runner-register-setting.scss']
})
export class RunnerRegisterSetting implements OnInit {
    @Input() widget: TaskStatusDefault = new TaskStatusDefault();
    
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }
}
