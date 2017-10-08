import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MeepoSlider } from '../slider';
@Component({
    selector: 'slider-setting',
    templateUrl: './slider-setting.html',
    styleUrls: ['./slider-setting.scss']
})
export class SliderSetting implements OnInit, OnChanges {
    @Input() widget: MeepoSlider = new MeepoSlider();
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

