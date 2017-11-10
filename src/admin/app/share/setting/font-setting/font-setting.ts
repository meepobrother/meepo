import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'font-setting',
    templateUrl: './font-setting.html',
    styleUrls: ['./font-setting.scss']
})
export class FontSetting implements OnInit {
    @Input() widget: FontDefault = new FontDefault();
    constructor() { }

    ngOnInit() { }

    onColorChange(color: string){
        this.widget.color = color;
    }
}


export class FontDefault{
    'font-size': string;
    'font-weight': string;
    'text-align': string;
    'font-style': string;
    'text-decoration': string;
    color: string;
}