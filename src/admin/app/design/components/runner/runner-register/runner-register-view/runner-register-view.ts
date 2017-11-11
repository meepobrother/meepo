import { Component, OnInit, Input } from '@angular/core';
import { RunnerRegisterDefault } from '../../../../classes';
import { ApiService } from '../../../../../core';
@Component({
    selector: 'runner-register-view',
    templateUrl: './runner-register-view.html',
    styleUrls: ['./runner-register-view.scss']
})
export class RunnerRegisterView implements OnInit {
    @Input() widget: RunnerRegisterDefault = new RunnerRegisterDefault();
    
    constructor(
        public api: ApiService
    ) { }

    ngOnInit() { }
}
