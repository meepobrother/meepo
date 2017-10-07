import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Button } from '../../classes';
@Component({
    selector: 'button-setting',
    templateUrl: './button-setting.html',
    styleUrls: ['./button-setting.scss']
})
export class ButtonSetting implements OnInit, OnChanges {
    type: string = 'content';
    @Input() widget: Button = new Button();
    constructor() { }

    ngOnInit() { 
        if(!this.widget){
            console.log('ButtonSetting 没有传入配置对象');
        }
    }

    ngOnChanges(changes: SimpleChanges){
        console.log(changes);
    }
}