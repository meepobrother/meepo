import { Component, OnInit, Input } from '@angular/core';
import { HelpRunnerDefault } from '../../../../classes';
@Component({
    selector: 'help-runner-view',
    templateUrl: './help-runner-view.html',
    styleUrls: ['./help-runner-view.scss']
})
export class HelpRunnerView implements OnInit {
    @Input() widget: HelpRunnerDefault = new HelpRunnerDefault();
    constructor() { }

    ngOnInit() { }
}
