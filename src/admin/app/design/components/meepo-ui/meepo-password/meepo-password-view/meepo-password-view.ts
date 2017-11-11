import { Component, OnInit, Inject, Input } from '@angular/core';
import { MeepoPasswordDefault } from '../../../../classes';

@Component({
    selector: 'meepo-password-view',
    templateUrl: './meepo-password-view.html',
    styleUrls: ['./meepo-password-view.scss']
})
export class MeepoPasswordView implements OnInit {
    @Input() widget: MeepoPasswordDefault = new MeepoPasswordDefault();
    constructor() { }

    ngOnInit() { }
}
