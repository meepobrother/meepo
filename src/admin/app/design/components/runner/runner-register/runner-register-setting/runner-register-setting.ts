import { Component, OnInit, Input } from '@angular/core';
import { RunnerRegisterDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';
@Component({
    selector: 'runner-register-setting',
    templateUrl: './runner-register-setting.html',
    styleUrls: ['./runner-register-setting.scss']
})
export class RunnerRegisterSetting implements OnInit {
    @Input() widget: RunnerRegisterDefault = new RunnerRegisterDefault();
    
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }
}
