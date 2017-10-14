import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MeepoInput } from '../../../../classes';
@Component({
    selector: 'input-setting',
    templateUrl: './input-setting.html',
    styleUrls: ['./input-setting.scss']
})
export class InputSetting implements OnInit, OnChanges {
    @Input() widget: MeepoInput = new MeepoInput();
    innerStyle: any;
    constructor() { }

    ngOnInit() { 
        this.innerStyle = this.widget.style;
    }

    ngOnChanges(changes: SimpleChanges){
        if('widget' in changes){
            this.innerStyle = this.widget.style;
        }
    }
}

