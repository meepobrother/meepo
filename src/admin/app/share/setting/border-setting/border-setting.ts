import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'border-setting',
    templateUrl: './border-setting.html',
    styleUrls: ['./border-setting.scss']
})
export class BorderSetting implements OnInit {
    @Input() widget: BorderDefault = new BorderDefault();

    


    constructor() { }

    ngOnInit() { }

    onBorderColorSelect(color: string) {
        this.widget['border-color'] = color;
    }
    onBoxShadowColorSelect(color: string) {
        this.widget['border-color'] = color;
    }
}

export class BorderDefault {
    'border-style': string;
    'border-color': string;
    'border-width': string;
    'box-shadow': string;
    'h-shadow': string;
    'v-shadow': string;
    'blur': string;
    'spread': string;
    'color': string;
}