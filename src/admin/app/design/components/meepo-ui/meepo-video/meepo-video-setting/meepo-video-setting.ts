import { Component, OnInit, Input } from '@angular/core';
import { MeepoVideoDefault } from '../../../../classes';

@Component({
    selector: 'meepo-video-setting',
    templateUrl: './meepo-video-setting.html',
    styleUrls: ['./meepo-video-setting.scss']
})
export class MeepoVideoSetting implements OnInit {
    @Input() widget: MeepoVideoDefault = new MeepoVideoDefault();
    fixed: boolean = false;
    constructor() { }

    ngOnInit() { }

    setFlexd(){
        this.widget.fixed = !this.widget.fixed;
    }
}
