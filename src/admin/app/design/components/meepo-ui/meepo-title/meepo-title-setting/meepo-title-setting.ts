import { Component, OnInit, Input } from '@angular/core';
import { MeepoTitleDefault } from '../../../../classes';

@Component({
    selector: 'meepo-title-setting',
    templateUrl: './meepo-title-setting.html',
    styleUrls: ['./meepo-title-setting.scss']
})
export class MeepoTitleSetting implements OnInit {
    @Input() widget: MeepoTitleDefault = new MeepoTitleDefault();
    constructor() { }

    ngOnInit() { }

    selectImage(){
        
    }
}